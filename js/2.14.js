let letrasPolicia = "TRWAGMYFPDXBNJZSQVHLCKE";

let numDni = Number(prompt("Introduzca solamente los números de su DNI"));

let posicion = numDni % 23;

let letra = letrasPolicia[posicion];

alert("Su DNI completo es: " + numDni + letra);
