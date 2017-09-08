// routes.js
// See below - you NEED A VALID MAPQUEST KEY to run this.
window.onload = function() {
    L.mapquest.key = 'NEED A VALID MAPQUEST KEY';

    var map = L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 13
    });

    L.mapquest.directions().route({
      start: 'San Francisco, CA',
      end: 'San Jose, CA',
      options: {
        timeOverage: 25,
        maxRoutes: 3,
      }
    });
  }