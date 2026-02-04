function validarCampo(evento){
    const elemento = evento.target;
    if (elemento.validity.valueMissing){
        elemento.setCustomValidity("Debes completar esta casilla.");
    }
}

function validarClave(evento){
    const elemento = evento.target;
    if (elemento.validity.valueMissing){
        elemento.setCustomValidity("Debes completar esta casilla.");
    }
    else if (elemento.validity.tooShort){
        elemento.setCustomValidity("Mínimo 8 caracteres para tu seguridad.");
    }
    else{
        elemento.setCustomValidity("");
    }
}

function limpiarError(evento){
    evento.target.setCustomValidity("");
}

const nombre_usuario = document.querySelector("#nombre-usuario");
const email = document.querySelector("#email");
const clave = document.querySelector("#clave");
const check = document.querySelector("#input-checkbox");

nombre_usuario.addEventListener("invalid", validarCampo);
nombre_usuario.addEventListener("input", limpiarError);

email.addEventListener("invalid", validarCampo);
email.addEventListener("input", limpiarError);

clave.addEventListener("invalid", validarClave);
clave.addEventListener("input", validarClave);

check.addEventListener("invalid", validarCampo);
check.addEventListener("input", limpiarError);


