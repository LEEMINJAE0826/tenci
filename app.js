window.onload = function () {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.style.animationPlayState = 'running'; // 모든 이미지가 로드된 후 시작
    });
};