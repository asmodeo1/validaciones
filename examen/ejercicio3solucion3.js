
function comprobar(evt) {
    const idAlumno = document.getElementById("idAlumno");
    const nombre = document.getElementById("nombre");
    const apellido1 = document.getElementById("apellido1");
    const curso = document.getElementById("curso");

    const mensajesError = [];

    if(/^\d{5}$/.test(idAlumno.value) == false) {
        mensajesError.push("El código no es válido");
    }

    if(tieneLongitudMinima(nombre.value, 4) == false) {
        mensajesError.push("El nombre no es válido");
    }

    if(tieneLongitudMinima(apellido1.value, 4) == false) {
        mensajesError.push("El apellido no es válido");
    }

    if(isEnteroMinimoMaximo(curso.value, 1, 99) == false) {
        mensajesError.push("El curso no es válido");
    }

    if (mensajesError.length != 0) { // if(mensajesError != []) {
        mostrarErrores(mensajesError);
        evt.preventDefault();
    }
}

function mostrarErrores(mensajesError) {
    /* Cogemos el section de los errores posibles */
    const errores = document.getElementById("errores");
    /* Borramos los posibles errores anteriores */
    errores.textContent = "";
   
    for (const mensaje of mensajesError) {
        const p = document.createElement("p");
        p.textContent = mensaje;
        errores.appendChild(p);
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);


