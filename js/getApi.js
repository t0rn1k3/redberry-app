const request = new XMLHttpRequest();
request.open('GET', 'https://resume.redberryinternship.ge/api/degrees');
request.send();

request.addEventListener('load', () => {
    const degreeData = JSON.parse(request.responseText);
    for(let i = 0; i < degreeData.length; i ++) {
        degrees.innerHTML += `<option value="${degreeData[i].title}">${degreeData[i].title}</option>`
        console.log(degreeData[i])
    }
})
