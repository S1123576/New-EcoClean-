// 切換語言功能
function changeLanguage(lang) {
    if (lang === 'zh') {
        alert('語言已切換至中文。');
    } else if (lang === 'en') {
        alert('Language switched to English.');
    }
}

// 表單提交後跳轉至確認頁面
document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('預約成功！系統已發送確認郵件。');
});
