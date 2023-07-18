function formSubmissionHandler(event) {
    event.preventDefault();
    let email = event.target.elements.email.value;
    const validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const errorMessageDiv = document.querySelector('#errorMessage')

    if(email.length === 0){
        errorMessageDiv.innerHTML=''
        const notFilledFormPar = document.createElement('p');
        const notFilledFormText = document.createTextNode('Whoops! It looks like you forgot to add your email');
        notFilledFormPar.appendChild(notFilledFormText);
        errorMessageDiv.appendChild(notFilledFormPar);
    } else if(!email.match(validRegex)) {
        errorMessageDiv.innerHTML=''
        const notValidEmailPar = document.createElement('p');
        const notValidEmailText = document.createTextNode('Please provide a valid email address');
        notValidEmailPar.appendChild(notValidEmailText);
        errorMessageDiv.appendChild(notValidEmailPar);
    } else {
        errorMessageDiv.innerHTML=''
        const emailCorrectPar = document.createElement('p');
        emailCorrectPar.classList.add('colorBlue');
        const emailCorrectText = document.createTextNode('Your email has been included into our database');
        emailCorrectPar.appendChild(emailCorrectText);
        errorMessageDiv.appendChild(emailCorrectPar);
        
        setTimeout(() => {
            errorMessageDiv.innerHTML='';
        }, 3000);
    }

}

document
.querySelector('#emailForm')
.addEventListener('submit', formSubmissionHandler)