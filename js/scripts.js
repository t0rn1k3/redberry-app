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
const position = document.getElementById('position')
const employer = document.getElementById('employer')
const startDate = document.getElementById('startDate')
const endingDate = document.getElementById('endingDate')
const role = document.getElementById('role')

const typedFirstName = document.getElementById('typedFirstName');
const typedLastName = document.getElementById('typedLastName');
const typedEmail = document.getElementById('typedEmail');
const typedTel = document.getElementById('typedTel');
const typedAbout = document.getElementById('typedAbout');
const typedAboutInfo = document.getElementById('typedAboutInfo');
const typedPosition = document.getElementById('typedPosition');
const typedEmployer = document.getElementById('typedEmployer');
const typedStartDate = document.getElementById('typedStartDate');
const typedEndDate = document.getElementById('typedEndDate');
const typedDescription = document.getElementById('typedDescription');
const uploadedPicture = document.getElementById('uploadedPicture');

const nameChecked = document.getElementById('nameChecked');
const nameError = document.getElementById('nameError');
const surnameChecked = document.getElementById('surnameChecked');
const surnameError = document.getElementById('surnameError')
const emailChecked = document.getElementById('emailChecked');
const emailError = document.getElementById('emailError');
const telChecked = document.getElementById('telChecked');
const telError = document.getElementById('telError');
const positionChecked = document.getElementById('positionChecked');
const positionError = document.getElementById('positionError');
const employerChecked = document.getElementById('employerChecked');
const employerError = document.getElementById('telError');



const slideContent = document.querySelectorAll('.content');


//start test 

start.addEventListener('click', () => {
    welcomePage.style.display ='none';
    personalInfo.style.display = 'flex';
})

console.log('თორნიკე')
console.log('ბურჯანაძე')
console.log('expample@redberry.ge')
console.log('995555462090')




