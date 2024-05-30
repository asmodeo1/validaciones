
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
        mensajesError = "Nombre: " + nombre.validationMessage + "\n";
    }
    // Solo será true si escribimos algo y que sean menos de 3 caracteres
    if (nombre.validity.tooShort) {
        mensajesError += "Nombre: " + "debe de tener al menos 3 caracteres" + "\n";
    }
    const edad = document.getElementById('edad');
    if (edad.checkValidity() == false) {
        mensajesError += "Edad: " + edad.validationMessage + "\n";
    }
    const clave = document.getElementById('clave');
    if (clave.checkValidity() == false) {
        mensajesError += "Clave: " + clave.validationMessage  + "\n";
    }
    //if(mensajesError != "") {
    if(formulario.checkValidity() == false) {
        window.alert(mensajesError);
        evt.preventDefault();
    }

}

document.getElementById('formulario').addEventListener("submit", comprobarDatos);