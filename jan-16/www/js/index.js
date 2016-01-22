/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    project: {
        name: 'historicplacesla',
        url: 'http://historicplacesla.org/entities/',
        mapExtent: []
    },

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.sqlLiteSetup();
    },

    sqlLiteSetup: function () {
        var SQLite = window.cordova.require('cordova-sqlite-plugin.SQLite');
        var sqlite = new SQLite('arches');
        app.sqlite = sqlite;

        sqlite.open(function(err) {
          if (err) throw err;
          sqlite.query('CREATE TABLE resources ( resource_id TEXT PRIMARY KEY NOT NULL, json_string TEXT NOT NULL );', [], function(err, res) {
            if (err) throw err;
            app.addHplaResource('9add4f2c-362a-4547-bb4a-b150e8366ba6');
          });
        });
    },
    addHplaResource: function(id) {
        $.get(this.project.url + id, function (d) {
        	console.log(d);
            app.sqlite.query('insert into resources (resource_id, json_string) values (\'' + id + '\',\'' + d + '\');', [], function(err, res) {
                if (err) throw err;
            });
        });
    },
    getResources: function (callback) {
        app.sqlite.query('select * from resources;', [], callback);
    },
    parseResources: function (resources) {
        var parsedResources = [];
        for (var i = 0; i < resources.length; i++) {
            var resource = resources[i];
            var jsonResource = JSON.parse(resource.json_string)
            var names = app.getEntities(jsonResource, 'NAME.E41');
            for (var j = 0; j < names.length; j++) {
                names[j] = names[j].value;
            }
            var geometries = app.getEntities(jsonResource, 'SPATIAL_COORDINATES_GEOMETRY.E47');
            for (var k = 0; k < geometries.length; k++) {
                parsedResources.push({
                    id: resource.resource_id,
                    geom: geometries[k].value,
                    name: names.join(', ')
                });
            }
        }
        return parsedResources;
    },
    getEntities: function(entity, type, list) {
        if (!list) {
            list = [];
        }
        for (var i = 0; i < entity.child_entities.length; i++) {
            var child_entity = entity.child_entities[i];
            if (child_entity.entitytypeid === type) {
                list.push(child_entity);
            }
            app.getEntities(child_entity, type, list);
        }
        return list;
    },
    updatePrimaryName: function (id, name) {
        app.sqlite.query('select * from resources where resource_id="' + id +'";', [], function (err, res) {
            if (err) throw err;
            if (res.rows.length > 0) {
                var resource = res.rows[0];
                var jsonResource = JSON.parse(resource.json_string);
                var names = app.getEntities(jsonResource, 'NAME.E41');
                var primaryName;
                for (var i = 0; i < names.length; i++) {
                    for (var j = 0; j < names[i].child_entities.length; j++) {
                        var child = names[i].child_entities[j];
                        if (child.entitytypeid === "NAME_TYPE.E55" && child.label === "Primary") {
                            primaryName = names[i]
                        }
                    }
                }
                if (primaryName) {
                    primaryName.value = name;
                    primaryName.label = primaryName.value;
                    var stringResource = JSON.stringify(jsonResource);
                    app.sqlite.query("update resources set json_string='" + stringResource + "' where resource_id='" + id + "';", [], function (err, res) {
                        if (err) throw err;
                        console.log('updated:',res);
                    });
                }
            }
        });
    }
};

app.initialize();
