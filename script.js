// script.js

document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('預約成功！');
  document.getElementById('reserve').style.display = 'none';
  document.getElementById('success').style.display = 'block';
});
// 預約內容存儲
const reservations = [];

// 處理預約提交
document.getElementById('reservation-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const type = document.getElementById('type').value;

  // 保存預約內容
  const newReservation = { name, phone, date, type };
  reservations.push(newReservation);

  // 更新預約列表
  updateReservationList();

  alert('預約成功！');
  document.getElementById('reserve').style.display = 'none';
  document.getElementById('success').style.display = 'block';
});

// 更新預約列表
function updateReservationList() {
  const list = document.getElementById('reservation-list');
  list.innerHTML = ''; // 清空列表

  reservations.forEach((reservation, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${reservation.name} - ${reservation.date} (${reservation.type})`;
    list.appendChild(listItem);
  });
}

// 垃圾車動態模擬
function simulateGarbageTruckMovement() {
  const map = document.getElementById('map');
  let position = 0;

  setInterval(() => {
    position = (position + 1) % 100;
    map.textContent = `垃圾車位置：${position}% 距離您家`;
  }, 1000);
}

// 啟動垃圾車定位模擬
simulateGarbageTruckMovement();

let map; // 地圖對象
let truckMarker; // 垃圾車標記
let truckPosition = { lat: 24.970015, lng: 121.263549 }; // 初始化垃圾車位置（元智大學）

// 初始化地圖
function initMap() {
  // 創建地圖
  map = new google.maps.Map(document.getElementById('map'), {
    center: truckPosition, // 初始地圖中心
    zoom: 15, // 放大級別
  });

  // 創建垃圾車標記
  truckMarker = new google.maps.Marker({
    position: truckPosition,
    map: map,
    title: '垃圾車',
  });

  // 開始模擬垃圾車移動
  simulateTruckMovement();
}

// 模擬垃圾車動態
function simulateTruckMovement() {
  setInterval(() => {
    // 隨機變動位置（模擬動態）
    truckPosition.lat += (Math.random() - 0.5) * 0.001; // 模擬經緯度變化
    truckPosition.lng += (Math.random() - 0.5) * 0.001;

    // 更新標記位置
    truckMarker.setPosition(truckPosition);

    // 更新地圖中心（可選）
    map.panTo(truckPosition);
  }, 2000); // 每2秒更新一次
}
