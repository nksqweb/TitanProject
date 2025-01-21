const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.slider-line img');
let count = 0;
let width;
let autoScroll;

function cloneSlides() {
    const firstClone = sliderLine.firstElementChild.cloneNode(true);
    const lastClone = sliderLine.lastElementChild.cloneNode(true);
    sliderLine.appendChild(firstClone);
    sliderLine.insertBefore(lastClone, sliderLine.firstChild);
}

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.transition = 'none'; // Убираем анимацию на время настройки
    sliderLine.style.width = width * (images.length + 2) + 'px'; // +2 из-за клонов
    sliderLine.style.transform = `translateX(${-width * (count + 1)}px)`; // Сдвигаем на первый слайд

    const slides = document.querySelectorAll('.slider-line img');
    slides.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-back').addEventListener('click', () => {
    stopAutoScroll();
    count--;
    rollSlider();
    restartAutoScroll();
});

document.querySelector('.slider-next').addEventListener('click', () => {
    stopAutoScroll();
    count++;
    rollSlider();
    restartAutoScroll();
});

function rollSlider() {
    sliderLine.style.transition = 'transform 0.5s ease-in-out';
    sliderLine.style.transform = `translateX(${-count * width}px)`;

    sliderLine.addEventListener('transitionend', () => {
        if (count < 0) {
            count = images.length - 1;
            sliderLine.style.transition = 'none';
            sliderLine.style.transform = `translateX(${-count * width}px)`;
        } else if (count >= images.length) {
            count = 0;
            sliderLine.style.transition = 'none';
            sliderLine.style.transform = `translateX(${-count * width}px)`;
        }
    });
}

function startAutoScroll() {
    autoScroll = setInterval(() => {
        count++;
        rollSlider();
    }, 3000);
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

function restartAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
}

startAutoScroll();

cloneSlides();


//slider 2
var swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    loop: true,
    allowTouchMove: false,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
    },
    speed: 500,
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

    return direction;
}

AOS.init({
    duration: 1500,
    delay: 50,
    offset:150,
    mirror: false,
    anchorPlacement: 'top-center',
});


function navigation() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function contacts() {
    document.getElementById("drop-contacts").classList.toggle("show");
}

const menu = document.querySelector('.menu__body');
const menuButton = document.querySelector('.burger');
const menuClose = document.querySelectorAll('.burger span');

const body = document.body;

menuClose.forEach(span => {
    console.log(span);
});


if (menu && menuButton) {
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');

        // Перебираем все элементы `menuClose` и добавляем/убираем класс
        menuClose.forEach(span => {
            span.classList.toggle('active');
        });


        });
}

