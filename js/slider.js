import { validateEmail } from "./validation.js";
import { validateNames } from "./validation.js";
import { validatePhone } from "./validation.js";

let slidePosition = 0;
const totalSlides = slideContent.length;

function newSlidePosition() {
    for (let slide of slideContent) {
        slide.classList.remove('content-visible');
        slide.classList.add('content-hidden');
    }
    slideContent[slidePosition].classList.add('content-visible');
}

//move to next button

function moveToNext() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }else {
        slidePosition++;
    }

    newSlidePosition();
}

//move to prev button

function moveToPrev() {
    if (slidePosition === 0) {
        slidePosition = 0;
    }else {
        slidePosition--;
    }

    newSlidePosition();
}
 export function stopMove() {
    slidePosition = -1;
 }


buttonNext.addEventListener('click', () => {
    validateNames()
    validateEmail()
    validatePhone()
    moveToNext();
})


buttonPrev.addEventListener('click', () => {
    moveToPrev();
})

