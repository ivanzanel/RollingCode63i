// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


"use strict"

let texto = "hola que tal" 
let textoInvertido = "";
for(let i = texto.length -1; i>= 0;i--){
    textoInvertido +=texto[i];
}
  console.log(textoInvertido);

