/**
 * Autor: Alvaro Dromant
 * Github: 
 */

// boton hamburgursa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});


// validaciones


const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");
let mensajesErrores = [];


const validar = evento => {
    evento.preventDefault();
    mensajesErrores = [];

    validarCampoRequerido(nombre, 'El nombre es un campo obligatorio');
    validarExpresionRegular(nombre, /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]*$/, 'El nombre no tiene caracteres válidos');
    
    validarCampoRequerido(apellido, 'El apellido es un campo obligatorio');
    validarExpresionRegular(apellido, /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]*$/, 'El apellido no tiene caracteres válidos');

    validarExpresionRegular(telefono, /^\d{9}$/, 'El teléfono debe tener 9 dígitos');
    validarExpresionRegular(correo, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Introduce una dirección de correo electrónico válida');
    validarCampoMinLength(mensaje, 10, 'Mensaje demasiado corto');

    if (mensajesErrores.length === 0 && confirm("¿Estas seguro de enviar el formulario?")){
        formulario.submit();
    } else if (mensajesErrores.length > 0){
        errores.textContent = "";
        console.log(mensajesErrores);
        mensajesErrores.forEach(function (mensaje){
            const nuevoLi = document.createElement("li");
            nuevoLi.textContent = mensaje;
            errores.appendChild(nuevoLi);
        });
    }
};

const validarCampoRequerido = (campo, mensajeError) => {
    campo.value.trim().length === 0 && mensajesErrores.push(mensajeError);
};

const validarExpresionRegular = (campo, expresionRegular, mensajeError) => {
    !expresionRegular.test(campo.value.trim()) && mensajesErrores.push(mensajeError);
};

const validarCampoMinLength = (campo, longitudMinima, mensajeError) => {
    campo.value.trim().length < longitudMinima && mensajesErrores.push(mensajeError);
};

formulario.addEventListener("submit", validar);








