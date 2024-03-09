//Datos del usuario
function validarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let validacionNyA = document.getElementById("validacionNyA");
    let email = document.getElementById("email").value;
    let validacionEmail = document.getElementById("validacionemail");

    if (nombre.length >= 2) {
        validacionNyA.innerHTML = "";
    } else {
        validacionNyA.innerHTML = "Ingrese su nombre y apellido";
        validacionNyA.className = "text-danger";
        return false;
    }

    if (email.includes("@")) {
        validacionEmail.innerHTML = "";
    } else {
        validacionEmail.innerHTML = "Ingrese un Email válido!";
        validacionEmail.className = "text-danger";
        return false;
    }

    document.getElementById("formulario").submit();
}

document.getElementById("formulario").addEventListener("submit", validarFormulario);




