let offset = 0;
const sliderLine = document.querySelector('.slider-line');

function moveNext() {
    offset = offset + 385;
    if (offset > 770) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function moveBack() {
    offset = offset - 385;
    if (offset < 0) {
        offset = 770;
    }
    sliderLine.style.left = -offset + 'px';
}

document.querySelector('.slider-next').addEventListener('click', moveNext);
document.querySelector('.slider-back').addEventListener('click', moveBack);

let autoSlide = setInterval(moveNext, 3000);

const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(moveNext, 3000);
});
