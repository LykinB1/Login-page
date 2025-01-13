const inputPassword = document.getElementById('password');
const buttonPassword = document.getElementById('button-password');

function showPassword(){
    if(inputPassword.type === 'password'){
        inputPassword.setAttribute('type','text')
        buttonPassword.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPassword.setAttribute('type','password')
        buttonPassword.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
};
