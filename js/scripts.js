const welcomePage = document.getElementById('welcomePage');
const personalInfo = document.getElementById('personalInfo');
const start = document.getElementById('buttonStart');
const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');

const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const tel = document.getElementById('phone');
const aboutMe = document.getElementById('aboutMe');
const file = document.getElementById('file');
const degrees = document.getElementById('degrees');

const typedFirstName = document.getElementById('typedFirstName');
const typedLastName = document.getElementById('typedLastName');
const typedEmail = document.getElementById('typedEmail');
const typedTel = document.getElementById('typedTel');
const typedAbout = document.getElementById('typedAbout');
const typedAboutInfo = document.getElementById('typedAboutInfo');
const uploadedPicture = document.getElementById('uploadedPicture');

const nameChecked = document.getElementById('nameChecked');
const nameError = document.getElementById('nameError');
const surnameChecked = document.getElementById('surnameChecked');
const emailChecked = document.getElementById('emailChecked');
const emailError = document.getElementById('emailError');
const telChecked = document.getElementById('telChecked');
const telError = document.getElementById('telError');


const slideContent = document.querySelectorAll('.content');


//start test 

start.addEventListener('click', () => {
    welcomePage.style.display ='none';
    personalInfo.style.display = 'flex';
})



