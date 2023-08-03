//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

"use strict";


function info(cadena) {

    if (cadena === cadena.toUpperCase()) {
        return 'sólo en mayúsculas';
    } else if (cadena === cadena.toLowerCase()) {
        return 'sólo minúsculas';
    } else {
        return 'por mayúsculas y minúsculas';
    }
}

let cadena = prompt("Ingrese un texto");
document.write(`El texto ingresado está compuesto ${info(cadena)}`);


