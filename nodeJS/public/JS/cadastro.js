function category(c) {
    let item = document.getElementById("item-" + c).innerHTML; 
    document.getElementsByTagName("input")[7].value = item;
}
function dropdown(p) {
    let e = document.getElementsByClassName("dropDown")[0];
    let d = ["block", "none"];
    e.style.display = d[p];
}

function finalizarCad(){
    const entrar = document.getElementById("entrar");
    
    entrar.addEventListener("click", () => {
        alert("cadastro finalizado");
    });
}

finalizarCad();

function Complements(){
    
const cpf = document.getElementById("cpf");

cpf.addEventListener("keypress", () => {
    let cpflength = cpf.value.length;

    if(cpflength === 3 || cpflength === 7) {
        cpf.value += ".";
    } else if (cpflength === 11) {
        cpf.value += "-";
    }
});

const cnpj = document.getElementById("CNPJ");

cnpj.addEventListener("keypress", () => {
    let cnpjlength = cnpj.value.length;

    if(cnpjlength === 2 || cnpjlength === 6) {
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

    if(datalength === 2 || datalength === 5) {
        data.value += "/";
    } else if (datalength === 10) {
        data.value += "";
    }
});

const tel = document.getElementById("telefone")

tel.addEventListener("keypress", () => {
    let tellength = tel.value.length;

    if(tellength === 0) {
        tel.value += "(";
    } else if (tellength === 3) {
        tel.value += ") ";
    } else if (tellength === 10) {
        tel.value += "-";
    }
});

const cep = document.getElementById("cep")

cep.addEventListener("keypress", () => {
    let ceplength = cep.value.length;

    if(ceplength === 5) {
        cep.value += "-";
    }
});

}

Complements()