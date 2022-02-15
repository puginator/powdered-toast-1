const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-menu-close');


btn.addEventListener('click', () => {
    console.log('clicked')
    menu.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});