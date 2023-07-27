// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let age = parseInt(prompt("Ingresa tu edad  "));

if (!isNaN(age)) {
    if (age >= 18) {
        document.write("Habilitado para conducir");
    }else{
        document.write("Sos muy chico para conducir");
    }
}else {
    alert("Introduce un numero válido");
}