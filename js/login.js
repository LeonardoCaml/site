class Cliente {
    constructor(id, email, senha) {
        this.id = id;
        this.email = email;
        this.senha = senha;
    }
}

function validate() {
    const form = document.querySelector('form')
    const email = document.getElementById('email'); 
    const senha = document.getElementById('senha');
    const error = document.getElementById('error');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('error');

    form.addEventListener('submit', (e) => {

        if(email.value == '' && senha.value == '') {
            error.textContent = 'insira seus dados nos campos!';
        } else {
            console.log(email.value);
            console.log(senha.value);
        }

        e.preventDefault();
    })

    email.addEventListener('keyup', () => {
        if(emailParams(email.value) !== true) {
            errorEmail.textContent = "insira um formato válido (@gmail, @hotmail, @yahoo, ...)"
        } else {
            errorEmail.textContent = '';
        }
    })
}

function emailParams(email) {
    let emailPath = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return emailPath.test(email);

}

function clientLogin() {

    const client = new Cliente()

    client.id = 1;
    client.email = 'leonardocamelo20@gmail.com';
    client.senha = 'minecraft.it.net';

    return client;
}

clientLogin();
validate();
