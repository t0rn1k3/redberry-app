import { validateForm } from "./validation.js";


function keyUpName() {
    validateForm();
    typedFirstName.innerHTML = fName.value;
    typedLastName.innerHTML = lName.value;
    typedEmail.innerHTML = email.value;
    typedTel.innerHTML = tel.value;
    typedAbout.innerHTML = `<h3> ჩემ შესახებ </h3> <div>${aboutMe.value}</div>`;
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

//display image 


// file.addEventListener('change', () => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => {
//         uploadedPicture = reader.result;
//         uploadedPicture.style.backgroundImage = `url(${file})`
//     });
//     reader.readAsDataURL(this.files[0])
// })