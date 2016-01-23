var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function(){
        // Parse URL Queries Method
        jQuery.extend({

          getQueryParameters : function(str) {
              return (str || window.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
          }

        });

        var query = $.getQueryParameters();
        var resourceid = query.id;

        // get data from db with resourceid
        var data = app.getResourceById(resourceid, function(data){
            data.save = app.save;
            ko.applyBindings(data);
        });
    },

    save: function(data){
        app.updatePrimaryName(data.resourceid, data.name());
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
        var SQLite = window.cordova.require('cordova-sqlite-plugin.SQLite');
        app.sqlite = new SQLite('arches');
        var data = {
            name: '',
            resourceid: '',
            geometry: ''
        };

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
                var geom = app.getEntities(jsonResource, 'SPATIAL_COORDINATES_GEOMETRY.E47');
                data.name = ko.observable(primaryName.label);
                data.resourceid = id;
                data.geometry = geom[0].value;

            }
            callback(data);
        });
        
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
}
app.initialize();