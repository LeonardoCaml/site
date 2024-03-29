function validate() {
    const buttonLogin = document.getElementById('entrar');
    const buttonReturn = document.getElementById('voltar');

    const form = document.querySelector('form');

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    const error = document.getElementById('error');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');

    form.addEventListener('submit', (e) => {

        buttonReturn.addEventListener('click', () => {
            location.href = '../index.html';
        })

        if (email.value == '' && senha.value == '') {
            error.textContent = 'insira seus dados nos campos!';
        } else if (emailParams(email.value) === true && passwordParams(senha.value) === true) {

            buttonLogin.addEventListener('click', () => {
                location.href = './AreaDoCliente.html';
            })

            error.textContent = "";
            errorEmail.textContent = "";
            errorPassword.textContent = "";

        }

        e.preventDefault();
    })

    email.addEventListener('keyup', () => {
        if (emailParams(email.value) !== true) {
            errorEmail.textContent = "insira um formato válido (@gmail, @hotmail, @yahoo, ...)"
        } else {
            errorEmail.textContent = '';
        }
    })

    senha.addEventListener('keyup', () => {
        if (passwordParams(senha.value) !== true) {
            errorPassword.textContent = "insira uma senha válida com pelo 1 número e um caractere (@, #, $, % ...)"
        } else {
            errorPassword.textContent = '';
        }
    })
}

function emailParams(email) {
    let emailPath = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return emailPath.test(email);
}
function passwordParams(password) {
    let passwordPath = /^(?=.*[0-9])(?=.*[!.@#$%^&*])[a-zA-Z0-9!!.@#$%^&*]{6,30}$/;

    return passwordPath.test(password);
}

validate();

