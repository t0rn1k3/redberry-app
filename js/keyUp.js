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
    endDate.innerHTML = endDate.value
    endingDate.innerHTML = endingDate.value
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




// file.addEventListener('change', () => {
//     const image = this.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//         const imgUrl = reader.result;
//         const img = document.createElement('img')
//         img.src = imgUrl;
//         uploadedPicture.appendChild(img)
//     }  
    
//     reader.readAsDataURL(image)
// })
