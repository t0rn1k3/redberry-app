export function validateForm() {
    const geoNumber = '995';
    const emailEnding = 'redberry.ge';


    //input first name and last name check

    if (fName.value.length > 1) {
        fName.classList.add('valid');
        nameChecked.style.display = 'block';
    }else {
        fName.classList.remove('valid');
        nameChecked.style.display = 'none';
    }
    if (lName.value.length > 1) {
        lName.classList.add('valid');  
        surnameChecked.style.display = 'block';
    }else {
        lName.classList.remove('valid');
        surnameChecked.style.display = 'none';
    }

    //about me textarea check

    if (aboutMe.value.length > 0) {
        aboutMe.classList.add('valid')
    }else {
        aboutMe.classList.remove('valid')
    }

    //email check

    if (email.value.endsWith(emailEnding)) {
        email.classList.add('valid');
        emailChecked.style.display = 'block';
        email.classList.remove('invalid');
        emailError.style.display = 'none';
    }else {
        email.classList.remove('valid')
        email.classList.add('invalid');
        emailError.style.display = 'block';
        emailChecked.style.display = 'none'
    }

    //phone check

    if (tel.value.startsWith(geoNumber)) {
        tel.classList.add('valid')
        telChecked.style.display = 'block';
        tel.classList.remove('invalid')
        telError.style.display = 'none';
    }else {
        tel.classList.remove('valid')
        tel.classList.add('invalid');
        telError.style.display = 'block';
        telChecked.style.display = 'none'
    }


}


