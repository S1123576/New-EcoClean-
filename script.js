// Language Switcher
const translations = {
    zh: {
        title: "到府收垃圾服務",
        button: "了解更多",
        bookingTitle: "我的預約",
        bookingText: "查看您的預約內容，並追蹤垃圾車位置。",
    },
    en: {
        title: "Garbage Collection Service",
        button: "Learn More",
        bookingTitle: "My Booking",
        bookingText: "View your booking details and track the garbage truck.",
    },
};

// 切換語言功能
document.getElementById("language-select").addEventListener("change", function () {
    const lang = this.value;
    document.querySelector(".hero h1").textContent = translations[lang].title;
    document.querySelector(".hero a").textContent = translations[lang].button;

    if (document.querySelector(".section h2")) {
        document.querySelector(".section h2").textContent = translations[lang].bookingTitle;
        document.querySelector(".section p").textContent = translations[lang].bookingText;
    }
});

// Google Maps Integration for Garbage Truck Tracking
function initMap() {
    const mapElement = document.getElementById("map");
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            center: { lat: 25.0330, lng: 121.5654 }, // Replace with your city’s coordinates
            zoom: 14,
        });

        const garbageTruck = new google.maps.Marker({
            position: { lat: 25.035, lng: 121.565 }, // Initial garbage truck position
            map: map,
            title: "Garbage Truck Location",
        });

        // Simulate garbage truck movement
        let truckPath = [
            { lat: 25.035, lng: 121.565 },
            { lat: 25.037, lng: 121.563 },
            { lat: 25.039, lng: 121.560 },
            { lat: 25.041, lng: 121.558 },
        ];

        let index = 0;
        setInterval(() => {
            if (index < truckPath.length) {
                garbageTruck.setPosition(truckPath[index]);
                map.panTo(truckPath[index]);
                index++;
            } else {
                index = 0; // Reset to loop the movement
            }
        }, 3000);
    }
}

// Load Google Maps Script Dynamically
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
script.defer = true;
document.body.appendChild(script);
