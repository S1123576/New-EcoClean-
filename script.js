// Smooth Scrolling for Internal Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Initialize Google Map
function initMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            center: { lat: 25.0330, lng: 121.5654 }, // Example: Taipei location
            zoom: 14,
        });

        const marker = new google.maps.Marker({
            position: { lat: 25.0330, lng: 121.5654 },
            map: map,
            title: '垃圾車當前位置',
        });
    }
}

// Attach Google Maps Script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
script.defer = true;
document.body.appendChild(script);
