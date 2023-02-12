import { stopAtPosition,  stopAtPersonalInfo } from "./slider.js";

let letters = /^[ა-ჰ]+$/;

export function validatePersonalInfo() {
    validateNames();
    validateEmail();
    validatePhone();
}

export function validateExperience() {
    validatePosition();
    validateEmployer();
    validateRole();
}

export function validateEducation() {
    validateUniversity()
    validateDescription();
    // validateDate()
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
        stopAtPersonalInfo();
       
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
        stopAtPersonalInfo();
        
    }

    //about me textarea check

    if (!aboutMe.value.length > 0) {
        aboutMe.classList.remove('valid')
    }else {
        aboutMe.classList.add('valid')
    }


}


export  function validateEmail() {
    const emailEnding = 'redberry.ge';

        if (!email.value.endsWith(emailEnding)) {
            email.classList.remove('valid')
            email.classList.add('invalid');
            emailError.style.display = 'block';
            emailChecked.style.display = 'none';
            stopAtPersonalInfo();
        }else {
            
            email.classList.add('valid');
            emailChecked.style.display = 'block';
            email.classList.remove('invalid');
            emailError.style.display = 'none';
        }
}

export function validatePhone() {
    const geoNumber = '+9955' ;

        if (tel.value.startsWith(geoNumber) &&
            tel.value.length == 13) {
                tel.classList.add('valid')
                telChecked.style.display = 'block';
                tel.classList.remove('invalid')
                telError.style.display = 'none';
        }else {
            tel.classList.remove('valid')
            tel.classList.add('invalid');
            telError.style.display = 'block';
            telChecked.style.display = 'none';
            stopAtPersonalInfo();
            
        }
}


export function validatePosition() {
    if (position.value.length < 1) {
        position.classList.remove('valid');
        positionChecked.style.display = 'none';
        position.classList.add('invalid')
        positionError.style.display = 'block';
        stopAtPosition();
    }else {
        position.classList.add('valid');
        positionChecked.style.display = 'block';
        position.classList.remove('invalid')
        positionError.style.display = 'none'
        
    }
}

export function validateEmployer() {
    if (employer.value.length < 1) {
        employer.classList.remove('valid');
        employerChecked.style.display = 'none';
        employer.classList.add('invalid')
        employerError.style.display = 'block';
        stopAtPosition();
    }else {
        employer.classList.add('valid');
        employerChecked.style.display = 'block';
        employer.classList.remove('invalid')
        employerError.style.display = 'none'
        
    }
}
console.log(startDate.value)

export function validateDate() {
    if (startDate == true &&
        endingDate == true) {
        startDate.classList.add('valid');
        endingDate.classList.add('valid');
    }else {
        stopAtPosition();
    }
}
export function  validateRole() {
    if (role.value < 1) {
        role.classList.remove('valid')
        role.classList.add('invalid')
    }else {
        role.classList.add('valid')
        role.classList.remove('invalid')
    }
}


export function validateUniversity() {
    if (university.value < 1) {
        university.classList.remove('valid')
        university.classList.add('invalid')
        universityChecked.style.display = 'none'
        universityError.style.display = 'block'
    }else {
        university.classList.add('valid')
        university.classList.remove('invalid')
        universityChecked.style.display = 'block'
        universityError.style.display = 'none'
    }
}

export function validateDescription() {
    if (description.value < 1 ) {
        description.classList.remove('valid');
        description.classList.add('invalid');
    }else {
        description.classList.add('valid');
        description.classList.remove('invalid')
    }
}




