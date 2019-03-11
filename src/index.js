const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');
mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJtc3Ryb25nY2giLCJhIjoiY2p0NGo3bXV0MTNzZTQ1bHZkdjNyNTQwciJ9.6-fMha4tHDYiWR9QXL6oWA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

const marker = buildMarker('activity', [-74.009151, 40.705086]);
marker.addTo(map);

// const mapMarker = document.createElement('div');
// mapMarker.style.width = '32px';
// mapMarker.style.height = '39px';
// mapMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
// new mapboxgl.Marker(mapMarker).setLngLat([-74.009, 40.705]).addTo(map);
