// form validering
const myForm = document.getElementById('myForm');

const myFirstName = document.getElementById('firstName');
const myFirstNameError = document.getElementById('firstNameError');
const myLastName = document.getElementById('lastName');
const myLastNameError = document.getElementById('lastNameError');
const myEmail = document.getElementById('email');
const myEmailError = document.getElementById('emailError');
const myPassword = document.getElementById('passWord');
const myPasswordRepeat = document.getElementById('passWordRepeat');
const myPasswordError = document.getElementById('passwordError');
const myPasswordRepeatError = document.getElementById('passwordRepeatError');

const mySubmitButton = document.getElementById('submitButton');

myFirstName.addEventListener('input', () => {
if (myFirstName.value.trim().length > 1) {
    console.log('fornavnet er langt nok');
    myFirstNameError.textContent = '';
    myFirstNameError.style.display = 'none';
    myFirstName.classList.remove('invalid');
    myFirstName.classList.add('valid');
} else{
    console.log('fornavnet er IKKE langt nok');
    myFirstNameError.textContent = 'Fornavnet skal være minimum 2 tegn';
    myFirstNameError.style.display = 'block';
    myFirstName.classList.add('invalid');
    myFirstName.classList.remove('valid');
}
});

   
myLastName.addEventListener('input', ()=> {
    if (myLastName.value.trim().length > 1) {
        console.log('efternavnet er langt nok');
        myLastNameError.textContent = '';
        myLastNameError.style.display = 'none';
        myLastName.classList.remove('invalid');
        myLastName.classList.add('valid');
    } else{
        console.log('efternavnet er IKKE langt nok');
        myLastNameError.textContent = 'Efternavnet skal være minimum 2 tegn';
        myLastNameError.style.display = 'block';
        myLastName.classList.add('invalid');
        myLastName.classList.remove('valid');
    }
    });      

    myEmail.addEventListener('input', (event) => {
        if(emailValidation(myEmail.value)){
            console.log('Dette er en gyldig email')
            myEmailError.textContent = '';
            myEmail.classList.remove('invalid');
            myEmail.classList.add('valid');
            myEmailError.style.display = 'none';
        } else{
            console.log('Dette er IKKE en gyldig email');
            myEmailError.textContent = 'Email skal være gyldig';
            myEmail.classList.remove('valid');
            myEmail.classList.add('invalid');
            myEmailError.style.display = 'block';
        }
    });

    
myPassword.addEventListener('input', ()=> {
    if (myPassword.value.trim().length > 5) {
        console.log('Kodeord er langt nok');
        myPasswordError.textContent = '';
        myPasswordError.style.display = 'none';
        myPassword.classList.remove('invalid');
        myPassword.classList.add('valid');
    } else{
        console.log('Kodeord er IKKE langt nok');
        myPasswordError.textContent = 'kodeord skal være minimum 6 tegn';
        myPasswordError.style.display = 'block';
        myPassword.classList.add('invalid');
        myPassword.classList.remove('valid');
    }
    });

    myPasswordRepeat.addEventListener('input', ()=> {
        if (myPasswordRepeat.value.trim().length == myPassword.value.trim().length) {
            console.log('Kodeord er ens');
            myPasswordRepeatError.textContent = '';
            myPasswordRepeatError.style.display = 'none';
            myPasswordRepeat.classList.remove('invalid');
            myPasswordRepeat.classList.add('valid');
        } else{
            console.log('Kodeord er IKKE langt nok');
            myPasswordRepeatError.textContent = 'kodeord skal være ens';
            myPasswordRepeatError.style.display = 'block';
            myPasswordRepeat.classList.add('invalid');
            myPasswordRepeat.classList.remove('valid');
        }
        });

    mySubmitButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if(myFirstName.value.trim().length > 1 && myLastName.value.trim().length > 1 && emailValidation(myEmail.value) && myPassword.value.trim().length > 5 && myPasswordRepeat.value.trim().length == myPassword.value.trim().length){
            console.log('formular udfyldt korrekt');
            alert('HAHAHA nu sælger vi din information');
        } else{
            alert('Formular skal udfyldes');
        } 
    });
    

// regex

function emailValidation(email){
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = emailRegex.test(email);

    return isValid;
};