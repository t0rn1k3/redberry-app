import { stopMove } from "./slider.js";

let letters = /^[ა-ჰ]+$/;

export function validateForm() {
    validateNames();
    validateEmail();
    validatePhone();
    validatePosition();
    validateEmployer();
    validateDate();
    validateDescription();
}


export function validateNames() {
    if (fName.value.length > 1 && 
        fName.value.match(letters)) {
        fName.classList.add('valid');
        nameChecked.style.display = 'block';
        fName.classList.remove('invalid')
        nameError.style.display = 'none'
    }else {
        fName.classList.remove('valid');
        nameChecked.style.display = 'none';
        fName.classList.add('invalid')
        nameError.style.display = 'block';
        stopMove();
    }
    if (lName.value.length > 1 && 
        lName.value.match(letters)) {
        lName.classList.add('valid');  
        surnameChecked.style.display = 'block';
        lName.classList.remove('invalid');
        surnameError.style.display = 'none';
    }else {
        lName.classList.remove('valid');
        surnameChecked.style.display = 'none';
        lName.classList.add('invalid');
        surnameError.style.display = 'block'
        stopMove();
    }

    //about me textarea check

    if (aboutMe.value.length > 0) {
        aboutMe.classList.add('valid')
    }else {
        aboutMe.classList.remove('valid')
    }


}


export  function validateEmail() {
    const emailEnding = 'redberry.ge';

        if (email.value.endsWith(emailEnding)) {
            email.classList.add('valid');
            emailChecked.style.display = 'block';
            email.classList.remove('invalid');
            emailError.style.display = 'none';
        }else {
            email.classList.remove('valid')
            email.classList.add('invalid');
            emailError.style.display = 'block';
            emailChecked.style.display = 'none';
            stopMove();
        }
}

export function validatePhone() {
    const geoNumber = '995';

        if (tel.value.startsWith(geoNumber) && 
            tel.value.length == 12) {
            tel.classList.add('valid')
            telChecked.style.display = 'block';
            tel.classList.remove('invalid')
            telError.style.display = 'none';
        }else {
            tel.classList.remove('valid')
            tel.classList.add('invalid');
            telError.style.display = 'block';
            telChecked.style.display = 'none';
            stopMove();
        }
}


export function validatePosition() {
    if (position.value.length > 1) {
        position.classList.add('valid');
        positionChecked.style.display = 'block';
        position.classList.remove('invalid')
        positionError.style.display = 'none'
    }else {
        position.classList.remove('valid');
        positionChecked.style.display = 'none';
        position.classList.add('invalid')
        positionError.style.display = 'block';
        stopMove();
    }
}

export function validateEmployer() {
    if (employer.value.length > 1) {
        employer.classList.add('valid');
        employerChecked.style.display = 'block';
        employer.classList.remove('invalid')
        employerError.style.display = 'none'
    }else {
        employer.classList.remove('valid');
        employerChecked.style.display = 'none';
        employer.classList.add('invalid')
        employerError.style.display = 'block';
        stopMove();
    }
}


export function validateDate() {
    if (startDate == true &&
        endingDate == true) {
        startDate.classList.add('valid');
        startDate.classList.remove('invalid')
        endingDate.classList.add('valid');
        endingDate.classList.remove('invalid')
    }else {
        startDate.classList.remove('valid');
        startDate.classList.add('invalid');
        endingDate.classList.remove('valid');
        endingDate.classList.add('invalid');
        stopMove();
    }
}

export function validateDescription() {
    if (description.value > 0 ) {
        description.classList.add('valid');
        description.classList.remove('invalid')
    }else {
        description.classList.remove('valid');
        description.classList.add('invalid');
    }
}




