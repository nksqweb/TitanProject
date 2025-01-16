const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector ('.slider-line');
let count = 0;
let widht;

function init() {
    console.log ('resize');
    widht = document.querySelector ('.slider').offsetWidth;
    sliderLine.style.width = widht * images.length + 'px';
    images.forEach(item => {
        item.style.width = widht + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-back').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length -1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});


function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*widht + 'px)';
}

