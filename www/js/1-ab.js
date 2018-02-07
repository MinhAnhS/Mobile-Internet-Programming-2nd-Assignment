/*
Code in this js file were taken and modified from this code sample made by Google,
which can be found here https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple

This site follow these licensing terms below that allowed me to use and reproduce these
material for my own creation:
https://developers.google.com/terms/site-policies
http://www.apache.org/licenses/LICENSE-2.0
https://creativecommons.org/licenses/by/3.0/
*/

window.onload = function() {
  initMap();
};

function initMap() {

  var map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 8,
    center: {lat: 0, lng: 0}
  });

  var geocoder = new google.maps.Geocoder();

  document.getElementById("showmap-btn").addEventListener("click", function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById("address").value;
  var infoLocation = {
    latitude: 0,
    longitude: 0
  }

  geocoder.geocode({'address': address}, function(results, status) {
    if (status == 'OK') {
      resultsMap.setCenter(results[0].geometry.location);

      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });

      infoLocation.latitude = marker.getPosition().lat();
      infoLocation.longitude = marker.getPosition().lng();

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }

    document.getElementById('info-location').innerHTML = "Latitude: " + infoLocation.latitude + "<br>Longitude: " + infoLocation.longitude;
  });
}
