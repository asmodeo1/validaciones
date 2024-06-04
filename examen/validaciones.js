/**
 * Comprueba si un texto está vacío o solo tiene espacios
 * @param {string} texto - valor a comprobar
 * @returns {boolean} - true si está vacío, false si no
 */
function isTextoVacio(texto) {
    if (texto.trim() == "") {
        return true;
    } else {
        return false;
    }
    //return texto.trim() == "" ? true : false;
    //return texto.trim() == "";
}

/**
 * Comprueba si un texto tiene el mínimo de caracteres indicados eliminado
 * espacios por los lados
 * @param {string} texto - texto a comprobar
 * @param {number} minimo - valor mínimo de caracteres admitido
 * @returns 
 */
function tieneLongitudMinima(texto, minimo) {
    if (texto.trim().length >= minimo) {
        return true;
    } else {
        return false;
    }
}

/**
 * Comprueba si un texto tiene el máximo de caracteres indicados eliminado
 * espacios por los lados
 * @param {string} texto - texto a comprobar
 * @param {number} maximo - valor máximo de caracteres admitido
 * @returns 
 */
function tieneLongitudMaxima(texto, maximo) {
    if (texto.trim().length <= maximo) {
        return true;
    } else {
        return false;
    }
}

/**
 * Comprueba si un texto tiene el mínimo y máximo de caracteres indicados eliminado
 * espacios por los lados
 * @param {string} texto - texto a comprobar
 * @param {number} minimo - valor mínimo de caracteres admitido
 * @param {number} maximo - valor máximo de caracteres admitido
 * @returns 
 */
function tieneLongitudMinimaMaxima(texto, minimo, maximo) {
    if (texto.trim().length >= minimo && texto.trim().length <= maximo) {
        return true;
    } else {
        return false;
    }
}

/**
 * Comprueba si un valor es un número entero
 * @param {string} valor - valor a comprobar
 * @returns {boolean} - true si es un entero, false si no
 */
function isEntero(valor) {
    const numero = parseInt(valor, 10);
    if (isNaN(numero) || numero.toString() !== valor) {
        return false;
    } else {
        return true;
    }
}

/**
 * Comprueba si un valor es un número entero y mayor o igual al mínimo indicado
 * @param {string} valor - valor a comprobar
 * @param {number} minimo - número mínimo admitido
 * @returns {boolean} - true si lo es, false si no
 */
function isEnteroMinimo(valor, minimo) {
    const numero = parseInt(valor, 10);
    if (isNaN(numero) || numero.toString() !== valor || numero < minimo) {
        return false;
    } else {
        return true;
    }
}

/**
 * Comprueba si un valor es un número entero y menor o igual al máximo indicado
 * @param {string} valor - valor a comprobar
 * @param {number} maximo - número máximo admitido
 * @returns {boolean} - true si lo es, false si no
 */
function isEnteroMaximo(valor, maximo) {
    const numero = parseInt(valor, 10);
    if (isNaN(numero) || numero.toString() !== valor || numero > maximo) {
        return false;
    } else {
        return true;
    }
}

/**
 * Comprueba si un valor es un número entero y en el rango indicado
 * @param {string} valor - valor a comprobar
 * @param {number} minimo - número mínimo admitido
 * @param {number} maximo - número máximo admitido
 * @returns {boolean} - true si lo es, false si no
 */
function isEnteroMinimoMaximo(valor, minimo, maximo) {
    const numero = parseInt(valor, 10);
    if (isNaN(numero) || numero.toString() !== valor || numero < minimo || numero > maximo) {
        return false;
    } else {
        return true;
    }
}

/**
 * Comprueba si un valor es un número decimal
 * @param {string} valor - valor a comprobar
 * @returns {boolean} - true si es un número decimal, false si no
 */
function isNumeroDecimal(valor) {
    const numero = parseFloat(valor);
    if (isNaN(numero) || isFinite(numero) == false || numero.toString() !== valor.value) {
        return false;
    } else {
        return true;
    }
}

/**
 * Comprueba si un valor es una fecha válida separada por /
 * @param {string} valor - valor con la fecha a comprobar
 * @returns {boolean} - true si es una fecha válida, false si no
 */
function isFecha(valor) {
    if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(valor) == false)  {
        return false;
    }
    /*const partes = valor.split("/");
    const dia = partes[0];
    const mes = partes[1];
    const año = partes[2];*/
    // Lo anterior en una sola línea
    const [dia, mes, año] = valor.split("/");
    const fecha = new Date(año, mes - 1, dia);
    if (fecha.getFullYear() != año || fecha.getMonth() != (mes - 1)
        || fecha.getDate() != dia) {
        return false;
    } else {
        return true;
    }
}

