let currentActive = 1;

function keyUpName() {
    if (fName.value.length > 2) {
        fName.style.border = '1px solid #98E37E';  
    }
    if (lName.value.length > 2) {
        lName.style.border = '1px solid #98E37E';  
    }
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

//display image 


// file.addEventListener('change', () => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => {
//         uploadedPicture = reader.result;
//         uploadedPicture.style.backgroundImage = `url(${file})`
//     });
//     reader.readAsDataURL(this.files[0])
// })