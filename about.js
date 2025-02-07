
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
