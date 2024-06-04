/* El código debe ser un número entre 100 y 200 y obligatorio */
/* El nombre debe tener al menos 5 caracteres */
/* La cantidad debe ser como mínimo 1 */

function comprobar(evt) {
    const codigo = document.getElementById("codigo");
    if(isEnteroMinimoMaximo(codigo.value, 100, 200) == false) {
        alert("El código no es válido");
        evt.preventDefault();
    }
    const nombre = document.getElementById("nombre");
   // if(!tieneLongitudMinima(nombre.value, 5)) {
    if(tieneLongitudMinima(nombre.value, 5) == false) {
        alert("El nombre no es válido");
        evt.preventDefault();
    }
    const cantidad = document.getElementById("cantidad");
    if(isEnteroMinimo(cantidad.value, 1) == false) {
        alert("La cantidad no es válida");
        evt.preventDefault();
    }
}

document.getElementById("formulario").addEventListener("submit", comprobar);

