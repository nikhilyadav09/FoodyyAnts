const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


document.querySelector('.scroll-down-arrow').addEventListener('click', () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});