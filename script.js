let map, truckMarker, truckPosition = { lat: 24.970015, lng: 121.263549 };

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
}

function switchLanguage() {
  const lang = document.getElementById('language').value;
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    el.textContent = translations[lang][el.dataset.lang];
  });
}

const translations = {
  zh: {
    title: "到府垃圾收運服務",
    subtitle: "便捷的垃圾清運解決方案",
    learnMore: "了解更多",
    /* Add other translations */
  },
  en: {
    title: "Door-to-Door Garbage Collection",
    subtitle: "Convenient Garbage Disposal Solutions",
    learnMore: "Learn More",
    /* Add other translations */
  },
};
