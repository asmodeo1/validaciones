// Con un solo window.alert 
function comprobar(evt) {
    let errores = "";
    const codigo = document.getElementById("codigo");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-z]\d{3}$/i.test(codigo.value) == false) {

        errores = "El código es incorrecto\n";
    }
    const nombre = document.getElementById("nombre");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-zñáéíóúäëïöüàèìòù]{6,}$/i.test(nombre.value) == false) {
        errores += "El nombre es incorrecto\n";
    }
    const cantidad = document.getElementById("cantidad");
    // Con estas comprobaciones ya es obligatorio que se introduzca al menos un dígito
    if(isNaN(Number(cantidad.value)) || isNaN(parseInt(cantidad.value)) || cantidad.value <= 0) {
        errores += "La cantidad es incorrecto\n";
    }
    /*
    Si solo quisiéramos comprobar que es mayor que cero
    if(codigo.value <= 0) {
        window.alert("La cantidad es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }*/

    if(errores != "") { //if(errores.length != 0) {
        window.alert(errores);
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);