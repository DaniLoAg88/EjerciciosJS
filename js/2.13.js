let entradaCorrecta = true;
let numero1;
let operacion;
let numero2;
let resultado;

do{
    numero1 = Number(prompt("Introduzca el primer número"));
    operacion = prompt("Que operación quiere realizar? (+, -, *, /, **, %)");
    numero2 = Number(prompt("Introduzca el segundo número"));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error al introducir los datos");
        entradaCorrecta = false;
    }else{

        switch (operacion) {
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                resultado = numero1 / numero2;
                break;
            case "**":
                resultado = numero1 ** numero2;
                break;
            case "%":
                resultado = numero1 % numero2;
                break;
        
            default:
                alert("Tipo de operación introducida inválida");
                break;
        }

        entradaCorrecta = true;

    }

}while(!entradaCorrecta);


console.log(`${numero1} ${operacion} ${numero2} = ${resultado}`);