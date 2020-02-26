import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

// [{"lat":48.8649224,"lng":2.3800903},{"lat":51.5410678,"lng":-0.076459}]
    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
    // {"lat":48.8649224,"lng":2.3800903}
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(map);
    });



  }
};

export { initMapbox };
