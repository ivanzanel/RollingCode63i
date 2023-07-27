/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/


let numero = prompt("Escribe un número del 0 al 10")

let promptNumero = Number(numero)


if (isNaN(promptNumero)) {
    document.write("Introduce un número válido")
}

else if (!(promptNumero >= 0 && promptNumero <= 10)) {
    document.write("Número erróneo")
}

else {
    if (promptNumero >= 0 && promptNumero <= 2) {
        alert("Muy deficiente")
    }

    else if (promptNumero <= 4) {
        alert("Insuficiente")
    }

    else if (promptNumero <= 6) {
        alert("Suficiente")
    }
    else if (promptNumero === 7) {
        alert("Bien")
    }

    else if (promptNumero <= 9) {
        alert("Notable")
    }

    else {
        alert("Sobresaliente")
    }

}

/*

Código 

//Prompt no se puede usar en RUN JS porque es para explorador
//window.alert tampoco, así que se usa console.log en RUN JS



//let numero = prompt('Ingrese un numero del 0 al 10')
let numero = "hola";

//Si NO es un numero, ingresa al if
if(isNaN(numero)) {
  console.log('No ingresó un número válido.')
} else {
// Rango 0-2 
if(numero >= 0 && numero <= 2){
    console.log('Muy deficiente')
} else if (numero <= 4) {
   console.log('Insuficiente')
} else if (numero <= 6) {
    console.log('Suficiente')
} else if (numero === 7) {
   console.log('Bien')
} else if (numero <= 9) {
    console.log('Notable') 
} else {
    console.log('Sobresaliente')
}

}
*/
