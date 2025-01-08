let map;
let truckMarker;
let truckPosition = { lat: 24.970015, lng: 121.263549 }; // 元智大學座標

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: truckPosition,
    zoom: 15,
  });

  truckMarker = new google.maps.Marker({
    position: truckPosition,
    map: map,
    title: "垃圾車位置",
  });

  simulateTruckMovement();
}

function simulateTruckMovement() {
  setInterval(() => {
    truckPosition.lat += (Math.random() - 0.5) * 0.001;
    truckPosition.lng += (Math.random() - 0.5) * 0.001;

    truckMarker.setPosition(truckPosition);
    map.panTo(truckPosition);
  }, 2000);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
