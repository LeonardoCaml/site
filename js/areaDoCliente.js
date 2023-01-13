const add = document.getElementById("addServices");
const containter = document.getElementById("container");

function openBar() {
    add.addEventListener("click", () => {
        containter.style.display = "flex";
    });
}

openBar();