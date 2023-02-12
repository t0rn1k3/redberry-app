import { validateEducation, validateExperience, validatePersonalInfo } from "./validation.js";


function keyUpName() {
    validatePersonalInfo()
    validateExperience()
    validateEducation()
    typedFirstName.innerHTML = fName.value;
    typedLastName.innerHTML = lName.value;
    typedEmail.innerHTML = email.value;
    typedTel.innerHTML = tel.value;
    typedStartDate.innerHTML = startDate.value;
    typedAbout.innerHTML = aboutMe.value !=  0 ?  `<h3> ჩემ შესახებ </h3> <div>${aboutMe.value}</div>` : " " ;
    typedPosition.innerHTML = position.value != 0 ?`<h3>გამოცდილება </h3> <div>${position.value}</div>` : "" ;
    typedEmployer.innerHTML = employer.value;
    typedRole.innerHTML = role.value;
    document.getElementById('typedEducation').innerHTML = university.value != 0 ? ` განათლება  ` : " ";
    typedUniversity.innerHTML = university.value
    typedDegree.innerHTML =  degrees.options[degrees.selectedIndex].innerHTML
    typedDescription.innerHTML = description.value 
    typedStartDate.innerHTML = startDate.value
    typedEnd.innerHTML = endDate.value
    typedEndDate.innerHTML = endingDate.value
}


fName.addEventListener('keyup', () => {
    keyUpName();
})
lName.addEventListener('keyup', () => {
    keyUpName();
})
email.addEventListener('keyup', () => {
    keyUpName();
})
tel.addEventListener('keyup', () => {
    keyUpName();
})
aboutMe.addEventListener('keyup', () => {
    keyUpName();
})
email.addEventListener('keyup', () => {
    keyUpName();
})
startDate.addEventListener('keyup', () => {
    keyUpName();
})
position.addEventListener('keyup', () => {
    keyUpName();
})
employer.addEventListener('keyup', () => {
    keyUpName();
})
role.addEventListener('keyup', () => {
    keyUpName();
})
university.addEventListener('keyup', () => {
    keyUpName();
})
degrees.addEventListener('keyup', () => {
    keyUpName()
})
description.addEventListener('keyup', () => {
    keyUpName();
})
startDate.addEventListener('keyup', () => {
    keyUpName()
})
endingDate.addEventListener('keyup', () => {
    keyUpName()
})
endDate.addEventListener('keyup', () => {
    keyUpName()
})



file.addEventListener('change', (e) => {
   if (window.File && window.FileReader && window.FileList) {
    const file = e.target.files
    const reader = new FileReader
    reader.addEventListener('load', (e) => {
        const picFile = e.target
        uploadedPicture.innerHTML = `<img src="${picFile.result}" alt="profile">`
        localStorage.setItem('thumbnail', reader.result);
    })
    reader.readAsDataURL(file[0])
   }else{
    alert('your browser does not support the API')
   }
})

