let cvData = [];


function submitForm(e) {
    e.preventDefault();
    let cv = {
        id : Date.now(), 
        name : fName.value, 
        surname : lName.value, 
        email : email.value,
        phone_number : tel.value,
        experiences : [
            {
                position : position.value, 
                employer : employer.value,
                start_date : startDate.value, 
                due_date : endingDate.value, 
                description : role.value
            }
        ],
        education : [
            {
                institute : university.value,
                degree : degrees.value,
                due_date : endDate.value,
                description : description.value
            }
        ], 
        // image : file.value,
        about_me : aboutMe.value
    }

    cvData.push(cv)
    document.forms[0].reset();

    

    fetch('https://resume.redberryinternship.ge/api/cvs', {
        method : 'POST',
        headers : {
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cv})
    })

    localStorage.setItem('UsersCV', JSON.stringify(cvData))

    console.log(cvData)
    console.log(cv)
}

form.addEventListener('submit', submitForm)


