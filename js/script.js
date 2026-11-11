
document.addEventListener("DOMContentLoaded", function () {

    const formularioLogin = document.getElementById("formularioLogin");

    if (formularioLogin) {
        formularioLogin.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Inicio de sesión. ¡Bienvenido a Eventlap!");
        });
    }

    const formularioRecuperar = document.getElementById("formularioRecuperar");

    if (formularioRecuperar) {
        formularioRecuperar.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Solicitud de recuperación recibida.");
        });
    }

    const formularioRegistro = document.getElementById("formularioRegistro");

    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Registro realizado correctamente.");
        });
    }


    
    const botonInscripcion = document.getElementById("botonInscripcion");

    if (botonInscripcion) {
        botonInscripcion.addEventListener("click", function () {
            alert("Tu solicitud de inscripción ha sido recibida.");
        });
    }


        const formularioEditar = document.getElementById("formularioEditar");

    if (formularioEditar) {
        formularioEditar.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Tus cambios han sido guardados correctamente.");
        });
    }
});
