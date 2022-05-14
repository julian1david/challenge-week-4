//Cuando no se usa framewokrs entre otros se dewbe especificar el .js
import {profile} from "./slides.js";


const button = document.querySelector('#button_slide');
const image = document.querySelector('#image-profile');
const profileDescription = document.querySelector('.profile__info--description');
const profileName = document.querySelector('.profile__info--name')
const profileProfession = document.querySelector('.profile__info--profession')
let actualSlide = 0;

function previous() {
    if(profile[actualSlide - 1]){
        actualSlide--;
        printSlide(actualSlide);
    }
}

function next() {
    if(profile[actualSlide + 1]){
        actualSlide++;
        printSlide(actualSlide);
    }
}


function printSlide(position){
    const slide = profile[position]
    image.src = slide.imgSrc;
    profileDescription.textContent =  slide.testimony;
    profileName.textContent =  slide.author;
    profileProfession.textContent=  slide.profession
}

button.addEventListener('click', (event) => {
    if (event.target.id === 'botton_next') {
        next();
    }
    else if ( EventTarget.id = 'botton_previous'){
        previous();
    }
})

window.addEventListener('keyup', e => {
    const key = e.key
    if (key === 'ArrowRight') {
        next()
    } else if (key === 'ArrowLeft') {
        previous()
    }
})