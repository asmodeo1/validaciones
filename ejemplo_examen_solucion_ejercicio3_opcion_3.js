function crearElementoError(errores, mensaje) {
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.style.color = "red";
    errores.appendChild(p);
}

// Con un solo window.alert 
function comprobar(evt) {
    const errores = document.getElementById("errores");
    errores.textContent = "";
    const codigo = document.getElementById("codigo");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-z]\d{3}$/i.test(codigo.value) == false) {
        crearElementoError(errores, "El código es incorrecto");
    }
    const nombre = document.getElementById("nombre");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-zñáéíóúäëïöüàèìòù]{6,}$/i.test(nombre.value) == false) {
        crearElementoError(errores, "El nombre es incorrecto");
    }
    const cantidad = document.getElementById("cantidad");
    // Con estas comprobaciones ya es obligatorio que se introduzca al menos un dígito
    if(isNaN(Number(cantidad.value)) || isNaN(parseInt(cantidad.value)) || cantidad.value <= 0) {
        crearElementoError(errores, "La cantidad es incorrecta");
    }
    /*
    Si solo quisiéramos comprobar que es mayor que cero
    if(codigo.value <= 0) {
        window.alert("La cantidad es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }*/

    if(errores.textContent != "") { //if(errores.hasChildNodes()) {
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);

