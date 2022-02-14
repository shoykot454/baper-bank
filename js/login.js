document.getElementById('login-submit').addEventListener('click',function(){
//get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
//get user password
const password =document.getElementById('user-password');
const userPassword = password.value;
//check email and password
if (userEmail == 'sontan@gmail.com' && userPassword =='secret'){
   window.location.href='banking.html';
}
})
