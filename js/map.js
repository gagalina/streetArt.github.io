function initMap () {
    var myLatLng = {lat: 49.834676, lng:  24.014276};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
