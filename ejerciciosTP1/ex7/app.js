"use strict";

let num1;
num1 = parseInt(prompt("Ingrese un nro"));

let num2;
num2 = parseInt(prompt("Ingrese otro nro"));

let num3;
num3 = parseInt(prompt("Ingrese un tercer nro"));

if (num1 > num2 && num1 > num3) {
  document.write(`${num1} es el numero mayor`);
}

else if (num2 > num1 && num2 > num3) {
  document.write(`${num2} es el numero mayor`);
}
else if (num3 > num1 && num3 > num2) {
  document.write(`${num3} es el numero mayor`);
}
else {
  document.write(`Los tres números , ${num3} , ${num2} y ${num3}, son iguales`);
}

