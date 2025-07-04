const form = document.getElementById('form');
const emailInput = document.querySelector('.hero__input');
const errorText = document.querySelector('.error__text')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let validSubmit = true;
    if(emailInput.value.trim() === ''){
        emailInput.classList.add('input__error');
        emailInput.placeholder = 'example@email.com';
        errorText.classList.remove('hide');
        validSubmit = false;
    } else{
        emailInput.classList.remove('input__error');
        errorText.classList.add('hide');
        emailInput.style.margin = '0px'
    }
    if(validSubmit){
        form.submit();
        emailInput.value = '';
        emailInput.placeholder = 'Your email address...'
    }
})
