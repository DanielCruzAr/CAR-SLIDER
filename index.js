let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');

nextBtn.onclick = function() {
    showSlider('next');
};
prevBtn.onclick = function() {
    showSlider('prev');
};

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAuto = setTimeout(function() {
    nextBtn.click();
}, timeAutoNext);
function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item'); 

    if (type === 'next') {
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(itemThumbnail[positionLastItem]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(function() {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAuto);
    runAuto = setTimeout(function() {
        nextBtn.click();
    }, timeAutoNext);
}