
const signUpForm = document.getElementById('signUpForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('create');
const passwordConfirmInput = document.getElementById('password');
const profileInput = document.getElementById('profile');

function submit(){
    emailInput.innerHTML = emailInput.value;
    passwordInput.innerHTML = passwordInput.value;
    passwordConfirmInput.innerHTML = passwordConfirmInput.value;
    profileInput.innerHTML = profileInput.value;
}

// let signUpForm = document.querySelector('#signUpForm');

// signUpForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
// })
