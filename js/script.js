const carouselElement = document.getElementById('carousel-container');
const thumbnailElement = document.getElementById('thumbnail-container');

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


function createCarouselElement(image, title, text){
    carouselElement.innerHTML += 
    `<div class="carousel-item">
        <img src="./${image}" alt="Carousel slide image" class="main-image">
        <div class="img-description" id="description-container">
            <h2 class="mx-3 my-2">${title}</h2>
            <p class="ms-3">${text}</p>
        </div>
    </div>`;
    thumbnailElement.innerHTML += `
    <div class="thumbnail-item">
        <img src="./${image}" alt="Carousel Thumbnail image" class="thumbnail">
    </div>`
    return createCarouselElement;
};

let activeIndex = 2;

images.forEach(element => {
    createCarouselElement(element.image, element.title, element.text)
});

document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
document.querySelectorAll('div.thumbnail-item')[activeIndex].classList.add('active');

const prevButton = document.querySelector('div.navigator-prev');
prevButton.addEventListener('click', function(){
    if (activeIndex == 0 ) {
        activeIndex = images.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }

    imageInteraction();
});

const nextButton = document.querySelector('div.navigator-next');
nextButton.addEventListener('click', function(){
    if (activeIndex == images.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    imageInteraction();
});

setInterval(function(){
    if (activeIndex == images.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    imageInteraction();
}, 3000);

function imageInteraction(){
    document.querySelector('div.carousel-item.active').classList.remove('active');
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('active');
    document.querySelector('div.thumbnail-item.active').classList.remove('active');
    document.querySelectorAll('div.thumbnail-item')[activeIndex].classList.add('active');
}