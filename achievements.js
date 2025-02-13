
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
    const svg = element.querySelector('svg');

    element.addEventListener('click', (event) => {
        if (!event.target.closest('svg')) {
            svg.classList.toggle('rotate');
        }
    });
});
