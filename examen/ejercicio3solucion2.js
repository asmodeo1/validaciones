
function comprobar(evt) {
    const idAlumno = document.getElementById("idAlumno");
    const nombre = document.getElementById("nombre");
    const apellido1 = document.getElementById("apellido1");
    const curso = document.getElementById("curso");

    const mensajeErrores = "";

    if(/^\d{5}$/.test(idAlumno.value) == false) {
        mensajeErrores = "El código no es válido\n";
    }

    if(tieneLongitudMinima(nombre.value, 4) == false) {
        mensajeErrores += "El nombre no es válido\n";
    }

    if(tieneLongitudMinima(apellido1.value, 4) == false) {
        mensajeErrores += "El apellido no es válido\n";
    }

    if(isEnteroMinimoMaximo(curso.value, 1, 99) == false) {
        mensajeErrores += "El curso no es válido";
    }

    if(mensajeErrores != "") {
        alert(mensajeErrores);
        evt.preventDefault();
    }
}


document.getElementById("formulario").addEventListener("submit", comprobar);