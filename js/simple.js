// simple.js
// SEE below. You NEED A VALID MAPBOX KEY to run this.

var map = L.map('map').setView([51.505, -0.09], 13);


const accessToken = 'NEED A VALID MAPBOX KEY';

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 14,
        id: 'mapbox.streets',
        //id: 'mapbox.satellite',
        accessToken: accessToken
    }).addTo(map);



var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>You clicked on a marker.</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5105, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

var clickPopup = L.popup();

function onMapClick(e) {
    clickPopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
