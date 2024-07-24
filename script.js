// 1 array para username
// 1 array para password
let usernames = [];
let passwords = [];

// Utilizar arrays para armazenar dados;
// Os arrays devem estar vinculados por index
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    cadastrar(username, password);

});

function cadastrar(username, password) {
    if (usernames.indexOf(username) === -1) {
        usernames.push(username);
        passwords.push(password);
        alert('Cadastro realizado com sucesso!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Usuário já existe! Escolha outro nome.');
    }
}

function entrar() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    
    let userIndex = usernames.indexOf(username);

    if (userIndex !== -1 && passwords[userIndex] === password) {
        
        alert('Login realizado com sucesso!');
        window.location.href = "home.html"; 
    } else {
        
        alert('Usuário ou senha incorretos!');
    }
}

// Utilizaremos o window.location.href para transitar entre as páginas.
function voltar() {
    window.location.href = "index.html"; 
}
