const welcomePage = document.getElementById('welcomePage');
const personalInfo = document.getElementById('personalInfo');
const start = document.getElementById('buttonStart');
const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const typedFirstName = document.getElementById('typedFirstName');
const typedLastName = document.getElementById('typedLastName');
const slideContent = document.querySelectorAll('.content')

//start test 

start.addEventListener('click', () => {
    welcomePage.style.display ='none';
    personalInfo.style.display = 'flex';
})


let currentActive = 1;

function keyUp() {
    if (fName.value.length > 2) {
        fName.style.border = '1px solid #98E37E';  
    }
    document.getElementById('typedFirstName').innerHTML = fName.value
    document.getElementById('typedLastName').innerHTML = lName.value
    console.log()
}


fName.addEventListener('keyup', () => {
    keyUp();
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


buttonNext.addEventListener('click', () => {
    moveToNext()
})

buttonPrev.addEventListener('click', () => {
    moveToPrev();
})

