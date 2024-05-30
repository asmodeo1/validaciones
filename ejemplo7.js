
function comprobarDatos(evt) {
    const formulario = document.getElementById('formulario');
    /* Si queremos comprobar que todo el formulario es válido o no
    if(formulario.checkValidity() == false) {
        alert("faltan datos");
        evt.preventDefault();
    }
    */
    let mensajesError = "";
    const nombre = document.getElementById('nombre');
    if (nombre.checkValidity() == false) {
        // validationMessage es el mensaje por defecto que muestra el navegador
        mensajesError = "<li>Nombre: " + nombre.validationMessage + "</li>";
        nombre.style.backgroundColor = "red";
        //nombre.classList.add("bg-danger");
    } else {
        // Volvemos a poner el color del principio (el que fuese)
        nombre.style.backgroundColor = "";
       // nombre.classList.remove("bg-danger");
    }
    // Solo será true si escribimos algo y que sean menos de 3 caracteres
    if (nombre.validity.tooShort) {
        mensajesError += "<li>Nombre: " + "debe de tener al menos 3 caracteres" + "</li>";
        //nombre.style.backgroundColor = "red";
    } else {
        //nombre.style.backgroundColor = "";
    }
    const edad = document.getElementById('edad');
    if (edad.checkValidity() == false) {
        mensajesError += "<li>Edad: " + edad.validationMessage + "</li>";
        edad.style.backgroundColor = "red";
    } else {
        edad.style.backgroundColor = "";
    }
    const clave = document.getElementById('clave');
    if (clave.checkValidity() == false) {
        mensajesError += "<li>Clave: " + clave.validationMessage  + "</li>";
        clave.style.backgroundColor = "red";
    } else {
        clave.style.backgroundColor = "";
    }
    const repetirClave = document.getElementById('repetirClave')
    if (clave.value != repetirClave.value) {
        mensajesError += "<li>Clave: Las claves no coinciden</li>";
        repetirClave.style.backgroundColor = "red";
    } else {
        repetirClave.style.backgroundColor = "";
    }
    const provincia = document.getElementById('provincia');
    if (provincia.selectedIndex == 0) {
        mensajesError += "<li>Provincia: Debes seleccionar una provincia</li>";
        provincia.style.backgroundColor = "red";
    } else {
        provincia.style.backgroundColor = "";
    }
    if(mensajesError != "") {
    //if(formulario.checkValidity() == false) {
        const errores = document.getElementById('errores');
        errores.classList.remove("d-none");
        /* Con innerHTML se procesa la cadena de texto y se crean las etiquetas que
        haya en ella */
        errores.innerHTML = mensajesError;
        evt.preventDefault();
    }  else {
        errores.classList.add("d-none");
    }
}

function impedirCaracteres(evt) {
    const tecla = evt.key;
    if( (tecla < "0" || tecla > "9") && tecla != "Backspace" && tecla != "Delete"
            && tecla != "ArrowLeft" && tecla != "ArrowRight") {
      evt.preventDefault(); // Impedimos que se escriba la letra
    }
}

function comprobarEdad(evt) {
    const edad = document.getElementById('edad');
    if(edad.value > 50) {
        window.alert("La edad debe ser menor que 50");
    }
}

document.getElementById('formulario').addEventListener("submit", comprobarDatos);
document.getElementById('edad').addEventListener("keydown", impedirCaracteres);
document.getElementById('edad').addEventListener("blur", comprobarEdad);
