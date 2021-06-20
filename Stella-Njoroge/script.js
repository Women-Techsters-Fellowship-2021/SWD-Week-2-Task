const burgerBtn = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});