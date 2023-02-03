const welcomePage = document.getElementById('welcomePage');
const personalInfo = document.getElementById('personalInfo');
const start = document.getElementById('buttonStart');
const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const typedFirstName = document.getElementById('typedFirstName');
const typedLastName = document.getElementById('typedLastName');

//start test 

start.addEventListener('click', () => {
    welcomePage.style.display ='none'
    personalInfo.style.display = 'flex'
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




