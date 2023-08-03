/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58

D
*/


"use strict";

function calcularPerimetroRectangulo(ladoA, ladoB) {
    const perimetro = 2 * (ladoA + ladoB);
     return perimetro;
 }
 
 function main() {
     const ladoA = parseFloat(prompt("Ingrese el valor del primer lado del rectángulo:"));
     const ladoB = parseFloat(prompt("Ingrese el valor del segundo lado del rectángulo:"));
     
     const perimetro = calcularPerimetroRectangulo(ladoA, ladoB);
     
     console.log("El perímetro del rectángulo es:", perimetro);
 }
 
 main();


//Resuelto