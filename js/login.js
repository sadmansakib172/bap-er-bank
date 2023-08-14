document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    if(userEmail === 'sakib@gmail.com' && userPassword === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Takar ki gach lagai rakhci ami!!');
    }
})