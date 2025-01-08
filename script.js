unction initMap() {
  const truckLocation = { lat: 25.033964, lng: 121.564468 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: truckLocation,
  });

  new google.maps.Marker({
    position: truckLocation,
    map: map,
    title: '垃圾車位置',
  });
}

document.addEventListener('DOMContentLoaded', initMap);
