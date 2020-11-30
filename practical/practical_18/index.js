const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');




// Event handlers

form.addEventListener('submit',function(e){
    e.preventDefault();   //stopping data submission
    checkInput();

});



//Functions
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    console.log(usernameValue)
// FOR USERNAME VALIDATION

    if(usernameValue ===''){
        showError(username,"Username cannot be empty");
    }
    else if(!isUsernameValid(usernameValue)){
        showError(username,"Username is not valid");
    }
    else{
        showSuccess(username);
    }

// FOR EMAIL ID VALIDATION

    if(emailValue ===''){
        showError(email,"Email ID cannot be empty");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email ID is not valid");
    }
    else{
        showSuccess(email);
    }

// FOR PASSWORD1 VALIDATION

    if(password1Value ===''){
        showError(password1,"Password1 cannot be blank");
    }
    else{
        showSuccess(password1);
    }

// FOR PASSWORD2 VALIDATION

    if(password2Value ===''){
        showError(password2,"Password2 cannot be blank");
    }
    else if(password2Value!=password1Value){
        showError(password2,"Passwords not matched");
    }
    else{
        showSuccess(password2);
    }
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
    
}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-z]{2,3})$/.test(email)
}
function isUsernameValid(name){
    return /^[a-z]+$/.test(name)
}
