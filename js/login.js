function variableFields() {
    const email = document.getElementById("email").value;
    // verificar validade do email
    if(!email) {
        document.getElementById("recover-password").disabled = true;
    } else if (validateEmail(email)){
        document.getElementById("recover-password").disabled = false;
    } else {
        document.getElementById("recover-password").disabled = true;
    }

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}