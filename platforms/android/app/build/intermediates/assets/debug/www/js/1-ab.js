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
