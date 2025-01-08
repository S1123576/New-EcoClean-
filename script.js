// 初始化 Google 地圖
function initMap() {
  const truckLocation = { lat: 25.033964, lng: 121.564468 }; // 初始垃圾車位置
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: truckLocation,
  });

  const truckMarker = new google.maps.Marker({
    position: truckLocation,
    map: map,
    title: '垃圾車位置',
  });

  // 模擬更新位置功能
  setInterval(() => {
    const newLat = truckLocation.lat + (Math.random() - 0.5) * 0.01;
    const newLng = truckLocation.lng + (Math.random() - 0.5) * 0.01;
    truckMarker.setPosition({ lat: newLat, lng: newLng });
    map.panTo({ lat: newLat, lng: newLng });
  }, 5000);
}

// 表單提交處理
document.getElementById('booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('您的預約已提交成功！我們會盡快與您聯繫。');
  // 模擬跳轉到確認頁面
  window.location.href = 'my-booking.html';
});

// 語言切換
document.querySelector('.language-selector')?.addEventListener('change', (event) => {
  const selectedLang = event.target.value;
  if (selectedLang === 'en') {
    alert('Language switched to English.');
    // 實現語言切換的後續功能
  } else {
    alert('語言已切換為繁體中文。');
  }
});
