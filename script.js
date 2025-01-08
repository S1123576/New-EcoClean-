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
        const initialPosition = { lat: 25.033964, lng: 121.564468 }; // 台北101位置
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: initialPosition,
        });
        new google.maps.Marker({
            position: initialPosition,
            map: map,
            title: "垃圾車位置",
        });
    }
});
