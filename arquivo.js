//EFEITO MENU 'HAMBURGUE'

const btnMobile = document.getElementById('btn_mobile');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);