"use strict";

let num1;
num1 = prompt("Ingrese un nro");

let num2;
num2 = prompt("Ingrese otro nro");


if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
}
else if (num2 > num1) {
  console.log(`${num2} es mayor que ${num1}`);
}
else {
  console.log("Ambos números son iguales");
}