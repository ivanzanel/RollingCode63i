// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.


"use strict";

let edad1 = prompt("Ingrese una edad"); 
let edad2 = prompt("Ingrese una edad");
let edad3 = prompt("Ingrese otra edad"); 

let edades = [edad1, edad2, edad3];

let mayor = Math.max(edad1, edad2, edad3);

let nombre1 = "Eze"; 
let nombre2 = "Gabi"; 
let nombre3 = "Ivan"; 

if (edad1 === mayor) {
    console.log(`La persona mayor es: ${nombre1}`);
} else if (edad2 === mayor) {
    console.log(`La persona mayor es: ${nombre2}`);
} else {
    console.log(`La persona mayor es: ${nombre3}`);
}

console.log(`La edad mayor es: ${mayor}`);