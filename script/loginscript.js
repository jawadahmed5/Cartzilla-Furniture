

async function fetchApiUsers() {
    const fetchApi = await fetch('https://fakestoreapi.com/users');
    return await fetchApi.json();
}
document.getElementById("login-page").addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

   
    const users = await fetchApiUsers();

   
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert('Login successful!');
       window.location.href = '/pages/home.html'; 
    } else {
        let localStorageEmail = localStorage.getItem("email")
            let localStoragePassword = localStorage.getItem("password")
        
            let loginUserEmail = document.getElementById("loginEmail").value
            let loginUserPassword = document.getElementById("loginPassword").value
        
        
            if (localStorageEmail === loginUserEmail && localStoragePassword === loginUserPassword  ) {
                window.location.href="/pages/home.html"
        
            } else {
            alert('user not found, try again');
            
        }
    }
});



