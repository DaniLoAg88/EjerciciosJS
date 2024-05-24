let numIntroducido = prompt("Introduzca un número");
let numFactorial = 0;
let final = numIntroducido.length;

for (let i = 0; i < final; i++) {
    numFactorial += Number(numIntroducido[i]);
}

alert("El factorial de su número " + numIntroducido + " es: " + numFactorial); 
