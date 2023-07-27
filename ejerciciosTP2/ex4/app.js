"use strict"

let acumulador= 0;
while (true){
    let numero=prompt("Coloque un número:");
    if (numero===null) {
        break;
    }
    numero=Number(numero)
    if(isNan(numero)){
        console.log("Ingrese un caracter válido")
        continue
    }

    acumulador= numero
    console.log(acumulador)
}