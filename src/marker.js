const mapboxgl = require('mapbox-gl');

//create function that takes a two params
// markerType (hotel, rest, activity)
// coordinates
// depending on the market type ==> defined the image
// set the lngLat using the params

const iconURLs = {
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurants: 'url(http://i.imgur.com/cqR6pUI.png)',
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
};

module.exports = function markerMaker(markerType, coordinates) {
  const mapMarker = document.createElement('div');
  mapMarker.style.width = '32px';
  mapMarker.style.height = '39px';
  mapMarker.style.backgroundImage = iconURLs[markerType];
  //   if (markerType === 'hotel') {
  //     mapMarker.style.backgroundImage = iconURLs[markerType];
  //   } else if (markerType === 'activity') {
  //     mapMarker.style.backgroundImage = iconURLs[activity];
  //   } else {
  //     mapMarker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  //   }
  return new mapboxgl.Marker(mapMarker).setLngLat(coordinates);
};
