function comprobar(evt) {
    const codigo = document.getElementById("codigo");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-z]\d{3}$/i.test(codigo.value) == false) {
        window.alert("El código es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
    const nombre = document.getElementById("nombre");
    // Usando el patrón ya no hay que comprobar que sea requerido
    if(/^[a-zñáéíóúäëïöüàèìòù]{6,}$/i.test(nombre.value) == false) {
        window.alert("El nombre es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
    const cantidad = document.getElementById("cantidad");
    // Con estas comprobaciones ya es obligatorio que se introduzca al menos un dígito
    if(isNaN(Number(cantidad.value)) || isNaN(parseInt(cantidad.value)) || cantidad.value <= 0) {
        window.alert("La cantidad es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }
    /*
    Si solo quisiéramos comprobar que es mayor que cero
    if(codigo.value <= 0) {
        window.alert("La cantidad es incorrecto");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }*/


    const hoy = new Date();
    const fecha = document.getElementById("fecha").valueAsDate;
    /*
    // Hoy contiene también las horas minutos y segundos actuales
    // pero nuestra fecha tiene las 00:00:00 con lo que siempre
    // será menor que hoy. Un truco es poner la hora a las 23:59:59
    fecha.setHours(23);
    fecha.setMinutes(59);
    fecha.setSeconds(59);
    if(fecha < hoy) {
        window.alert("La fecha es menor a la actual");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }*/

    // Otra opción es comparar los datos por separado */
    let fechaIncorrecta = false;
    if(fecha.getFullYear() < hoy.getFullYear()) {
        fechaIncorrecta = true;
    } else if(fecha.getMonth() < hoy.getMonth()){
        fechaIncorrecta = true;
    } else if(fecha.getDate() < hoy.getDate()){
        fechaIncorrecta = true;
    }
    if(fechaIncorrecta == true) {
        window.alert("La fecha es menor a la actual");
        evt.preventDefault(); // Evitamos que se envíe el formulario
    }


}

document.getElementById("formulario").addEventListener("submit", comprobar);