document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.getElementById('email')
    const emailField = email.value;
    const password = document.getElementById('password')
    const passwordField = password.value;
    if(emailField === 'arman@gmail.com' && passwordField === 'arman'){
        window.location.href = 'bank.html';
    }else{
        return alert('invalid user')
    }

})

