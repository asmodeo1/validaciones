// A los parámetros les podemos darles un valor por defecto, con
// lo que si no le pasamos visualViewport, usará ese
function mostrarError(elemento, display="block") {
    const error = document.querySelector(elemento);
    // nextSibling() devuelve el primer hermano siguiente de un nodo
    //const error = codigo.nextSibling();
    error.style.display = display;
}

// Con un solo window.alert 
function comprobar(evt) {
    let hayErrores = false;
    const codigo = document.getElementById("codigo");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-z]\d{3}$/i.test(codigo.value) == false) {
        mostrarError("#codigo + div");
        hayErrores = true;
    } else {
        mostrarError("#codigo + div", "none");
    }
    const nombre = document.getElementById("nombre");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-zñáéíóúäëïöüàèìòù]{6,}$/i.test(nombre.value) == false) {
        mostrarError("#nombre + div");
        hayErrores = true;
    } else {
        mostrarError("#nombre + div", "none");
    }
    const cantidad = document.getElementById("cantidad");
    // Con estas comprobaciones ya es obligatorio que se introduzca al menos un dígito
    if(isNaN(Number(cantidad.value)) || isNaN(parseInt(cantidad.value)) || cantidad.value <= 0) {
        mostrarError("#cantidad + div");
        hayErrores = true;
    } else {
        mostrarError("#cantidad + div", "none");
    }
    if(hayErrores == true) { //if(hayErrores) {
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);



