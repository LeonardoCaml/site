const add = document.getElementById("addServices");
const containter = document.getElementById("container");
const sair = document.getElementById('return');

function openBar() {
    add.addEventListener("click", () => {
        containter.style.display = "flex";
    });
}

function logOut() {
    sair.addEventListener('click', () => {
        window.location.href = "./login.html"
    })
}

logOut();
openBar();