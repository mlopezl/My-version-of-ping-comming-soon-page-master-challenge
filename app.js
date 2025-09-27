const form = document.getElementById('form');
const emailInput = document.querySelector('.hero__input');
const errorText = document.querySelector('.error__paragraph')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let validSubmit = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput.value.trim())){
        emailInput.classList.add('is-invalid');
        emailInput.placeholder = 'example@email.com';
        errorText.classList.remove('error-text');
        validSubmit = false;
    } else{
        emailInput.classList.remove('is-invalid');
        errorText.classList.add('error-text');
        emailInput.classList.add('no-margin');
    }
    if(validSubmit){
        emailInput.value = '';
        emailInput.placeholder = 'Your email address...'
    }
})
