const clientDataBase = require('../NodeJS/src/cliente');

class Cliente {
    constructor(id, nome, senha) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
    }
}

function emailValid() {
    
}

function clientReturn() {

    const client = new Cliente();
    client.id = 1;
    client.nome = 'João';
    client.senha = 123;
    
    
    console.log(client)

}

clientReturn();




// function variableFields() {
//     const emailValid = isEmailValid();
//     const passwordValid =isPasswordValid();

//     if(!emailValid || !passwordValid) {
//         entrar.disabled = true;
//     } else {
//         entrar.remove(disabled);
//     }
// }

// function isEmailValid() {
//     const email = document.getElementById("email").value;
//     if (!email) {
//         return false;
//     }
//     return validateEmail(email);
// }

// function isPasswordValid() {
//     const password = document.getElementById("senha").valiue;
//     if (!password) {
//         return false;
//     }
//     return true;
// }

// function validateEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
// }