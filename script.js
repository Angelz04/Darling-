function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-list');
    menuToggle.classList.toggle('open');
    menu.classList.toggle('open');
}
