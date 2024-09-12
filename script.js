document.getElementById("signUpForm").addEventListener('submit', function(e) {
    e.preventDefault();

let emailAddress =document.getElementById("emailInput").value
let userPassword =document.getElementById("passwordInput").value

console.log(emailAddress , userPassword);

if( emailAddress && userPassword){

    localStorage.setItem('email', emailAddress )
    localStorage.setItem('password', userPassword )

window.location.href="/pages/login.html"
    
}
});
