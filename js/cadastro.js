function category(c) {
    let item = document.getElementById("item-" + c).innerHTML;
    document.getElementsByTagName("input")[10].value = item;
}
function dropdown(p) {
    let e = document.getElementsByClassName("dropDown")[0];
    let d = ["block", "none"];
    e.style.display = d[p];
}

function finalizarCad() {
    const form = document.getElementById("container");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    const cadastrar = document.getElementById("cadastrar");

    cadastrar.addEventListener("click", () => {
        window.location.href = './login.html';
    });

    const voltar = document.getElementById("voltar");

    voltar.addEventListener("click", () => {
        window.location.href = './login.html';
    });
}

finalizarCad();

function Complements() {

    const cpf = document.getElementById("cpf");

    cpf.addEventListener("keypress", () => {
        let cpflength = cpf.value.length;

        if (cpflength === 3 || cpflength === 7) {
            cpf.value += ".";
        } else if (cpflength === 11) {
            cpf.value += "-";
        }
    });

    const cnpj = document.getElementById("CNPJ");

    cnpj.addEventListener("keypress", () => {
        let cnpjlength = cnpj.value.length;

        if (cnpjlength === 2 || cnpjlength === 6) {
            cnpj.value += ".";
        } else if (cnpjlength === 10) {
            cnpj.value += "/";
        } else if (cnpjlength === 15) {
            cnpj.value += "-";
        }
    });


    const data = document.getElementById("fundação");

    data.addEventListener("keypress", () => {
        let datalength = data.value.length;

        if (datalength === 2 || datalength === 5) {
            data.value += "/";
        } else if (datalength === 10) {
            data.value += "";
        }
    });

    const tel = document.getElementById("telefone")

    tel.addEventListener("keypress", () => {
        let tellength = tel.value.length;

        if (tellength === 0) {
            tel.value += "(";
        } else if (tellength === 3) {
            tel.value += ") ";
        } else if (tellength === 10) {
            tel.value += "-";
        }
    });

    function cepValidate() {
        const cepInput = document.getElementById("cep");
        const cityInput = document.getElementById('cidade');
        const stateInput = document.getElementById('estado');
        const adressInput = document.getElementById('endereço');

        cepInput.addEventListener("keypress", (e) => {

            //formatação do cep na tela do usuário

            let ceplength = cep.value.length;

            if (ceplength === 5) {
                cepInput.value += "-";
            }

            //Limitação para números apenas

            const onlyNumbers = /[0-9]/;
            const key = String(e.key);

            if (!onlyNumbers.test(key)) {
                e.preventDefault();
                return;
            }
        });

        //formatação do cep para o back-end

        cepInput.addEventListener('keyup', (e) => {

            const inputValue = e.target.value;

            const cepFinaly = inputValue.replace('-', '');

            //checar o tamanho de caracteres
            if (inputValue.length === 9) {
                getAddress(cepFinaly);
            }

        });

        //pegando a API

        const getAddress = async (cep) => {

            const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

            const response = await fetch(apiUrl);

            const data = await response.json();

            console.log(data);
            
            // resetar formulário após erro

            if(data.erro === 'true') {
                cityInput.reset();
                stateInput.reset();
            } else {
                cityInput.value = data.localidade;
                stateInput.value = data.uf;
                adressInput.value = data.logradouro;
            }


        };


    }

    cepValidate();
}

Complements()
