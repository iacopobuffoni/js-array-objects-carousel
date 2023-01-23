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

const _Slides = document.querySelector('.slides');
console.log(_Slides);
let _ActiveSlide = 0;

for (let i = 0; i < images.length; i ++) {
    _Slides.innerHTML += `<img src="${images[i].image}" alt="" class="hidden">
                            <div class="title hidden">
                                <h2> ${images[i].title} </h2>
                                <p> ${images[i].text} </p>
                            </div>`
}

const _AllSlides = document.querySelectorAll('.slides img');
const _AllTitles = document.querySelectorAll('.title');
_AllSlides[_ActiveSlide].classList.remove('hidden');
_AllTitles[_ActiveSlide].classList.remove('hidden');
console.log(_AllSlides);

const _Previous = document.getElementById('back');
const _Next = document.getElementById('next');

_Next.addEventListener ('click',

    function () {

        console.log(_AllSlides[_ActiveSlide])
        _AllSlides[_ActiveSlide].classList.add('hidden');
        _AllTitles[_ActiveSlide].classList.add('hidden');

        if (_ActiveSlide == _AllSlides.length - 1) {

            _ActiveSlide = 0;

        } else {

            _ActiveSlide ++;

        }

        _AllSlides[_ActiveSlide].classList.remove('hidden');
        _AllTitles[_ActiveSlide].classList.remove('hidden');

    }
)

_Previous.addEventListener ('click',

    function () {
        
        console.log(_AllSlides[_ActiveSlide])
        _AllSlides[_ActiveSlide].classList.add('hidden');
        _AllTitles[_ActiveSlide].classList.add('hidden');

        if (_ActiveSlide == 0) {

            _ActiveSlide = _AllSlides.length - 1;

        } else {

            _ActiveSlide --;

        }

        _AllSlides[_ActiveSlide].classList.remove('hidden');
        _AllTitles[_ActiveSlide].classList.remove('hidden');

    }
)