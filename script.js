const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(), 500);
    loginTitle.innerHTML = 'Bem-Vindo';
    userEmail.innerHTML = emailInput.value;
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML = 'Login';
    userEmail.innerHTML = 'Por favor efetue o login para acessar a plataforma.';
    emailInput.focus();
};

checkboxPass.onclick = () => {
   if(checkboxPass.checked) {
    passwordInput.type = 'text';
   }
   else {
    passwordInput.type = 'password';
   }
};