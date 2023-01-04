function category(c) {
    let item = document.getElementById("item-" + c).innerHTML; 
    document.getElementsByTagName("input")[6].value = item;
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