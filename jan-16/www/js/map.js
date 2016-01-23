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
    }),
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
});

var featureSelect = new ol.interaction.Select();
map.addInteraction(featureSelect);
featureSelect.on('select', function (e) {
    var features = e.target.getFeatures().getArray();
    if (features.length > 0) {
        document.location = 'resource_info.html?id=' + features[0].get('resource').id;
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

//Instantiate with some options and add the Control
var geocoder = new Geocoder('mapzen', {
  provider: 'pelias',
  key: 'search-rW2yhe4',
  lang: 'en',
  placeholder: 'Search for ...',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);

//Listen when an address is chosen
geocoder.on('addresschosen', function(evt){
  var
    feature = evt.feature,
    coord = evt.coordinate,
    address_html = feature.get('address_html')
  ;
  content.innerHTML = '<p>'+address_html+'</p>';
  overlay.setPosition(coord);
});

/**
* Popup
**/
var
  container = document.getElementById('popup'),
  content = document.getElementById('popup-content'),
  closer = document.getElementById('popup-closer'),
  overlay = new ol.Overlay({
    element: container,
    offset: [0, -40]
  })
;
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};
map.addOverlay(overlay);
