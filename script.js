//aos animation
AOS.init({
    once: true,
    duration: 1500,
    delay: 50,
    offset:150,
    mirror: false,
    anchorPlacement: 'center-bottom',
});

//footer mobile
function navigation() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function contacts() {
    document.getElementById("drop-contacts").classList.toggle("show");
}

//burger close and scroll
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

        menuClose.forEach(span => {
            span.classList.toggle('active');
        });
    });
}

menuButton.addEventListener('click', () => {
    body.classList.toggle('lock');
});

//headerFixed
const headerFixed = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        headerFixed.classList.add('header--fixed');
        headerFixed.classList.remove('header--scroll');
    } else {
        headerFixed.classList.add('header--scroll');
        setTimeout(() => {
            headerFixed.classList.remove('header--fixed');
        }, 30);
    }
});

//footer arrow
document.querySelectorAll('.rotate').forEach((item) => {
    item.querySelector('.drop-button').addEventListener('click', () => {
        item.classList.toggle('open');
    });
});


//fix modal scroll
const html = document.querySelector("html");
const header = document.querySelector("header");
const burger = document.querySelector(".burger");

let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
burger.addEventListener("click", () => {


    if (html.hasAttribute("style")) {
        html.removeAttribute("style");
        header.removeAttribute("style");
    } else {
        html.style.overflow = "hidden";
        html.style.paddingRight = scrollBarWidth + "px";
        header.style.paddingRight = scrollBarWidth + "px";
    }
});

// отменяет переход по в кладке "Соревнования"
const competitions = document.querySelectorAll('.competitions');
competitions.forEach((e => {
    e.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяет переход по ссылке
        alert('В данный момент страница недоступна.');
    })
}));