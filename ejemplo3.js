function comprobarDatos(evt) {
    const nombre = document.getElementById('nombre');
    // Con trim quitamos espacios por la izquierda y derecha
    if(nombre.value.trim() == "") {
        console.log("Falta el nombre");
        evt.preventDefault();
    }
    const patronNombre = /^[a-z ]{3,}$/i; // con i no diferencia mayúsculas de minúsculas
    if(patronNombre.test(nombre.value) == false) {
        console.log("El nombre solo admite letras inglesas y al menos 3");
        evt.preventDefault();
    }
    // Con el patrón de arriba esta ya no sería necesaria
    if(nombre.value.length < 3) {
        console.log("El nombre debe tener 3 o más caracteres");
        evt.preventDefault();
    }
    const edad = document.getElementById('edad');
    if(edad.value < 18 || edad.value > 100) {
        console.log("La edad debe estar entre 18 y 100");
        evt.preventDefault();
    }

    if(isNaN(Number(edad.value)) || isNaN(parseInt(edad.value))) {
        console.log("La edad debe ser un número entero");
        evt.preventDefault();
    }

    const clave = document.getElementById('clave').value;
    const clave1 = document.getElementById('repetirClave').value;
    if(clave != clave1) {
        console.log("Las claves no coinciden");
        evt.preventDefault();
    }
    const patronClave = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,}$/;
    //if(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,}$/.test(clave) == false) {
    if(patronClave.test(clave) == false) {
        console.log("La clave no cumple las condiciones");
        evt.preventDefault();
    }

    const provincia = document.getElementById('provincia');
    // selectedIndex es la posición / índice del elemento seleccionado. 0 el primero
    if(provincia.selectedIndex == 0) {
        console.log("Debes seleccionar una provincia");
        evt.preventDefault();
    }

    /*const provincia = document.getElementById('provincia').value;
    if(provincia == "Seleccionar") {
        console.log("Debes seleccionar una provincia");
        evt.preventDefault();
    }
    */

    const menorEdad = document.getElementById('menorEdad');
    const mayorEdad = document.getElementById('mayorEdad');
    if(menorEdad.checked == false && mayorEdad.checked == false) {
        console.log("Debes indicar si eres mayor de edad o no");
        evt.preventDefault();
    }

    const acepto = document.getElementById('acepto');
    if(acepto.checked == false) {
        console.log("Debes aceptar las condiciones");
        evt.preventDefault();
    }

}

// Cuando no se cumple una valdiación HTML el submit no se ejecuta
// Si queremos que no aparezcan los mensajes del navegador y se ejecute el submit,
// podemos ponerle el atributo novalidate al formulario
document.getElementById('formulario').addEventListener("submit", comprobarDatos);