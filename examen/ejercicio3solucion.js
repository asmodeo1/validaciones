
function comprobar(evt) {
    const idAlumno = document.getElementById("idAlumno");
    const nombre = document.getElementById("nombre");
    const apellido1 = document.getElementById("apellido1");
    const curso = document.getElementById("curso");
    const mensajes = document.getElementById("")

    if(/^\d{5}$/.test(idAlumno.value) == false) {
        alert("El código no es válido");
        evt.preventDefault();
    }

   /* El problema de esta es que solo admite caracteres "ingleses"
    if(/^[a-z]{4,}$/i.test(nombre.value.trim()) == false) {
        alert("El nombre no es válido");
        evt.preventDefault();
    }*/

    /* El problema de esta es que admite números, comas, ....
    if(nombre.value.trim().length < 5){
        alert("El nombre no es válido");
        evt.preventDefault();
    }*/

    // El problema de esta es que admite números, comas, ....
    if(tieneLongitudMinima(nombre.value, 4) == false) {
        alert("El nombre no es válido");
        evt.preventDefault();
    }

    // El problema de esta es que admite números, comas, ....
    // También podemos usar los otros modos que usamos para el nombre
    if(tieneLongitudMinima(apellido1.value, 4) == false) {
        alert("El apellido no es válido");
        evt.preventDefault();
    }

    /* Opción 1 
    if(/^\d{1,2}$/.test(curso.value) == false) {
        alert("El curso no es válido");
        evt.preventDefault();
    } */

    /* Opción 2
    if(curso.value < 1 || curso.value > 99) {
        alert("El curso no es válido");
        evt.preventDefault();
    }*/

    /* Opción 3 */
    if(isEnteroMinimoMaximo(curso.value, 1, 99) == false) {
        alert("El curso no es válido");
        evt.preventDefault();
    }
}


document.getElementById("formulario").addEventListener("submit", comprobar);