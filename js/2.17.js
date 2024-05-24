let entradaCorrecta = true;
let dias = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;

do {
    dias = Number(prompt("Introduzca el número de días"));
    horas = Number(prompt("Introduzca el número de horas"));
    minutos = Number(prompt("Introduzca el número de minutos"));

    if (isNaN(dias) && isNaN(horas) && isNaN(segundos)) {
        alert("Error al introducir los datos");
        entradaCorrecta = false;
    } else {
        segundos = (dias * 24 * 60 * 60) + (horas * 60 * 60) + (minutos * 60);
        entradaCorrecta = true;
    }

} while (!entradaCorrecta);

alert("La cantidad de segundos introducida es: " + segundos);
