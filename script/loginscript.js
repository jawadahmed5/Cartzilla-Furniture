// LOGIN PAGE //
document.getElementById("login-page").addEventListener('submit', function(e){
    e.preventDefault();

    let localStorageEmail = localStorage.getItem("email")
    let localStoragePassword = localStorage.getItem("password")

    let loginUserEmail = document.getElementById("loginEmail").value
    let loginUserPassword = document.getElementById("loginPassword").value
    
    if (localStorageEmail === loginUserEmail && localStoragePassword === loginUserPassword) {
        window.location.href="/pages/home.html"

    }
    
    
    else{
                alert('Invalid Data')
            }




})