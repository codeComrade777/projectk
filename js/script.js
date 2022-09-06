let subMenu = document.getElementById("subMenu");
let signin = document.getElementById("sign-form");
let signup = document.getElementById('signup-form')
function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}
function toggleSignin() {
    signin.classList.toggle("open-signin");
}
function toggleLogin() {
    signup.classList.toggle('open-login');
}
//validation for sign in
let emailError = document.getElementById('email-error');
// console.log(emailError);
let passwordError = document.getElementById('password-error');
// console.log(passwordError);
let submitError = document.getElementById('submit-error');
// console.log(submitError);
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword() {
    var password = document.getElementById('contact-password').value;
    if (password.length == 0) {
        passwordError.innerHTML = 'password is required';
        return false;
    }
    if (password.length <= 5) {
        passwordError.innerHTML = 'password is too short';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//Validation for sign up form
let nameError = document.getElementById('name-error');
let EmailError = document.getElementById('email1-error');
let password1Error = document.getElementById('password1-error');
let confirmpassword = document.getElementById('cpassword-error');
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'length is too short';
        return false;
    }
    if (!name.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        nameError.innerHTML = "Name is invalid";
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail1() {
    var email1 = document.getElementById('contact-email1').value;
    if (email1.length == 0) {
        EmailError.innerHTML = 'provide proper email';
        return false;
    }
    if (!email1.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        EmailError.innerHTML = "Email is invalid";
        return false;
    }
    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword1() {
    var password1 = document.getElementById('contact-password1').value;
    if (password1.length == 0) {
        password1Error.innerHTML = 'password is too short';
        return false;
    }
    if (password1.length <= 5) {
        password1Error.innerHTML = "password in invalid";
        return false;
    }
    password1Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateCPassword() {
    var cpassword = document.getElementById('contact-cpassword').value;
    var password1 = document.getElementById('contact-password1').value;
    if (cpassword != password1) {
        confirmpassword.innerHTML = 'passwords are not matched';
        return false;
    }
    if (cpassword.length == 0) {
        confirmpassword.innerHTML = 'password is too short';
        return false;
    }
    if (cpassword.length <= 5) {
        confirmpassword.innerHTML = "password in invalid";
        return false;
    }
    confirmpassword.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


//Home page open menu
let open=document.getElementById('akira');
function menutoggle(){
    open.classList.toggle("opening");
}
let filteringitems=document.getElementById("akira1");
console.log(filteringitems);
function filtering(){
    filteringitems.classList.toggle("filteringopening");
}