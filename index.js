const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-menu-close');
const menuItems = document.querySelectorAll('.mobile-menu-item');
const leftCarousel = document.querySelector('.carousel-left');
const rightCarousel = document.querySelector('.carousel-right');
const copyright = document.getElementById('copyrightYear');
const thumbsContainer = document.querySelectorAll('.thumbs');
const activeImages = document.getElementsByClassName('thumbs-active');

// Nav Bar menu and button 

btn.addEventListener('click', () => {
    console.log('clicked')
    menu.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })
});

// Carousel Buttons and function
function changeImage(a) {

    document.getElementById('carousel-image').src = a;
}

leftCarousel.addEventListener('click', () => {
    console.log('clicked')

});
rightCarousel.addEventListener('click', () => {
    console.log('clicked')

});

//Carousel Thumbnail Function
thumbsContainer.forEach(thumb => {

    thumb.addEventListener('click', () => {

        while (activeImages.length > 0) {
            activeImages[0].classList.remove('thumbs-active');
        }

        if (thumb.classList.contains('thumbs-active')) {
            thumb.classList.remove('thumbs-active');

        } else {
            thumb.classList.add('thumbs-active');

        }

    })
})

// Copyright Year

copyright.innerHTML = new Date().getFullYear();