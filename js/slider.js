import { validateExperience, validatePersonalInfo} from "./validation.js";

//start test 

start.addEventListener('click', () => {
    welcomePage.style.display ='none';
    personalInfo.style.display = 'flex';
    refreshButton.style.display = 'flex'
    if (slidePosition < 1) {
        buttonPrev.style.display = 'none'
    }
})

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
 export function stopAtPersonalInfo() {
    slidePosition = -1;
 }
 export function stopAtPosition() {
    slidePosition = 0;
 }


 

buttonNext.addEventListener('click', () => {
    if(slidePosition == 0 ) {
        validatePersonalInfo()
    }
    if (slidePosition == 1 ) {
        buttonPrev.style.display = 'block'
        validateExperience()
    }
 

    moveToNext();
    
    if (slidePosition == 2) {
        buttonNext.style.display = 'none';
        submitButton.style.display = 'block'
   }

})


buttonPrev.addEventListener('click', () => {
    moveToPrev();
    if (slidePosition < 2) {
        buttonNext.style.display = 'block'
        submitButton.style.display = 'none'
    }
    if (slidePosition < 1) {
        buttonPrev.style.display = 'none'
    }
})


