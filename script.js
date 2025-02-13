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

//header
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
const rotate = document.querySelectorAll('.rotate');

rotate.forEach((element) => {
    const svg = element.querySelector('path');

    element.addEventListener('click', (event) => {
        if (!event.target.closest('path')) {
            svg.classList.toggle('rotate');
        }
    });
});

//fix modal scroll
const b = document.querySelector("html");
const m = document.querySelector("header");
const c = document.querySelector(".burger");

c.addEventListener("click", () => {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (b.hasAttribute("style")) {
        b.removeAttribute("style");
        m.removeAttribute("style");
    } else {
        b.style.overflow = "hidden";
        b.style.paddingRight = scrollBarWidth + "px";
        m.style.paddingRight = scrollBarWidth + "px";
    }
});

// отменяет переход по в кладке "Соревнования"
const competitions = document.querySelectorAll('.competitions');
competitions.forEach((e => {
    e.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяет переход по ссылке
        alert('В данный момент ссылка недоступна.');
    })
}));
