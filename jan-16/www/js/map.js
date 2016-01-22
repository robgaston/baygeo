var vectorSource = new ol.source.Vector();
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    view: new ol.View({
        center: ol.proj.transform([-118.25,34.05], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
    })
});

var featureSelect = new ol.interaction.Select();
map.addInteraction(featureSelect);
featureSelect.on('select', function (e) {
    var features = e.target.getFeatures().getArray();
    if (features.length > 0) {
        console.log(features[0].get('resource'));
    }
});

document.addEventListener('deviceready', function () {
    app.getResources(function(e,r) {
      var resources = app.parseResources(r.rows);
      for (var i = 0; i < resources.length; i++) {
          var format = new ol.format.WKT();
          var feature = format.readFeature(resources[i].geom, {
              dataProjection: 'EPSG:4326',
              featureProjection: 'EPSG:3857'
          });
          feature.set('resource', resources[i]);
          vectorSource.addFeature(feature);
      }
      var extent = vectorSource.getExtent();
      map.getView().fit(extent, map.getSize());
    });
}, false);
