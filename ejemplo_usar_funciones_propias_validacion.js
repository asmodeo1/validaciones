
function comprobar(evt) {
    const nombre = document.getElementById("nombre");
    if(tieneLongitudMinima(nombre.value, 2) == false) {
        alert("El nombre no es correcto");
        evt.preventDefault();
    }
    const edad = document.getElementById("edad");
    if(isEnteroMinimoMaximo(edad.value, 1, 130) == false) {
        alert("La edad no es correcta");
        evt.preventDefault();
    }
    const ciudad = document.getElementById("ciudad");
    if(isTextoVacio(ciudad.value)) {
        alert("La ciudad no es correcta");
        evt.preventDefault();
    }

    const fecha = document.getElementById("fecha");
    if(isFecha(fecha.value) == false) {
        alert("La fecha no es correcta");
        evt.preventDefault();
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);
