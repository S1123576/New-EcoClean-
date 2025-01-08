document.addEventListener("DOMContentLoaded", () => {
    // 表單提交事件
    const form = document.getElementById("booking-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("預約成功！系統已發送確認郵件。");
        });
    }

    // Google 地圖初始化
    if (document.getElementById("map")) {
        const initialPosition = { lat: 24.970128, lng: 121.263757 }; // 元智大學的經緯度
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16, // 調整地圖縮放等級
            center: initialPosition,
        });
        new google.maps.Marker({
            position: initialPosition,
            map: map,
            title: "垃圾車位置",
        });
    }
});
