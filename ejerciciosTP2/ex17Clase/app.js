// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


"use strict"

let texto = prompt("Ingresa un texto");
for (let i = 0; i < texto.length; i++) {
  let letra = texto.at(i).toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log(`la vocal ${letra} esta en la posicion ${i}`);
    break;
  }
}