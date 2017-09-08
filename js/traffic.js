// traffic.js
// See below - you NEED A VALID MAPQUEST KEY to run this.
window.onload = function () {
    L.mapquest.key = 'NEED A VALID MAPQUEST KEY';

    var map = L.mapquest.map('map', {
        center: [37.7749, -122.4194],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    map.addControl(L.mapquest.trafficControl());
}