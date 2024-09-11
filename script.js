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


// LOGIN PAGE //
document.getElementById("login-page").addEventListener('submit', function(e){
    e.preventDefault();

    let localStorageEmail = localStorage.getItem("email")
    let localStoragePassword = localStorage.getItem("password")

    let loginUserEmail = document.getElementById("loginEmail")
    let loginUserPassword = document.getElementById("loginPassword")
    
    if (localStorageEmail === loginUserEmail && localStoragePassword === loginUserPassword) {
        window.location.href="/index.html"

            }else{
                alert("invalid data")
            }




})
