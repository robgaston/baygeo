define(["jquery", "knockout", "pouchdb", "main-view", "cordova", "bootstrap"], function($, ko, PouchDB, mainView) {
    var jQuery = $;
    var app = {
        project: {
            name: 'historicplacesla',
            url: 'http://historicplacesla.org/entities/',
            mapExtent: []
        },

        initialize: function() {
            app.sqlLiteSetup();
            require([mainView], function (view) {
                app.mainView = view;
            });
        },

        sqlLiteSetup: function () {
            var db = new PouchDB('myDB', {adapter: 'websql'});
            app.sqlite = db;
            app.addHplaResource('9add4f2c-362a-4547-bb4a-b150e8366ba6');
        },
        addHplaResource: function(id) {
            $.get(this.project.url + id, function (d) {
            	console.log(d);
                app.sqlite.put({
                    _id: id,
                    entity: JSON.parse(d)
                }).catch(function (err) {
                    console.log(err);
                });
            });
        },
        getResources: function (callback) {
            app.sqlite.allDocs({'include_docs': true}).then(callback).catch(function (err) {
                console.log(err);
            });
        },
        parseResources: function (resources) {
            var parsedResources = [];
            for (var i = 0; i < resources.length; i++) {
                var resource = resources[i];
                var jsonResource = resources[i].doc.entity;
                var names = app.getEntities(jsonResource, 'NAME.E41');
                for (var j = 0; j < names.length; j++) {
                    names[j] = names[j].value;
                }
                var geometries = app.getEntities(jsonResource, 'SPATIAL_COORDINATES_GEOMETRY.E47');
                for (var k = 0; k < geometries.length; k++) {
                    parsedResources.push({
                        id: resource.id,
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
        getResourceById: function(id, callback) {
            app.sqlite.get(id).then(function (doc) {
                var data = {
                    name: '',
                    resourceid: '',
                    geometry: ''
                };
                var resource = doc;
                var jsonResource = doc.entity;
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
                var geom = app.getEntities(jsonResource, 'SPATIAL_COORDINATES_GEOMETRY.E47');
                data.name = ko.observable(primaryName.label);
                data.resourceid = id;
                data.geometry = geom[0].value;
                callback(data);
            }).catch(function (err) {
              console.log(err);
            });
        },
        updatePrimaryName: function (id, name) {
            app.sqlite.get(id).then(function(doc) {
                var resource = doc;
                var jsonResource = doc.entity;
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
                }
              return app.sqlite.put({
                _id: id,
                _rev: doc._rev,
                entity: jsonResource
              });
            }).catch(function (err) {
              console.log(err);
            });
        }
    };

    document.addEventListener('deviceready', function () {
        app.initialize();
    }, false);

    return app;
});
