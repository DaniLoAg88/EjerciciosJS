let opcion;
const PI = 3.1416;
let base = 0;
let altura = 0;
let radio = 0;
let resultado = 0;

do {
    opcion = prompt("Que opción desea? a)Área del triángulo, b)Área del rectángulo, c)Área del círculo, d)Salir)");

    switch (opcion) {
        case "a":
            base = Number(prompt("Introduzca la base de su triángulo"));
            altura = Number(prompt("Introduzca la altura de su triángulo"));
            resultado = (base * altura) / 2;
            console.log(`El área de su triángulo es ${resultado}`);
            break;
        case "b":
            base = Number(prompt("Introduzca la base de su rectángulo"));
            altura = Number(prompt("Introduzca la altura de su rectángulo"));
            resultado = base * altura;
            console.log(`El área de su rectángulo es ${resultado}`);
            break;
        case "c":
            radio = Number(prompt("Introduzca el radio de su círculo"));
            resultado = PI * (radio ** 2);
            console.log(`El área de su círculo es ${resultado}`);
            break;
        case "d":
            alert("¡Nos vemos pronto!");
            break;
        default:
            alert("Opción introducida inválida");
            break;

    }

} while (opcion != "d");
