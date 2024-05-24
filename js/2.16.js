let numeroIntroducido = Number(prompt("Introduzca un número"));
let numero = numeroIntroducido;

alert("Has introducido el número " + numeroIntroducido);
alert("Si utilizas numero++ se convierte en " + numero++); //Muestra el número introducido porque así primero coge el número para hacer la instrucción (mostrarlo )y después le suma 1
numero = numeroIntroducido;
alert("Si utilizas numero-- se convierte en " + numero--); //Muestra el número introducido porque así primero coge el número para hacer la instrucción (mostrarlo) y después le resta 1
numero = numeroIntroducido;
alert("Si utilizas ++numero se convierte en " + ++numero); //Muestra el número introducido incrementado en 1 porque así primero suma 1 y después hace la instrucción (mostrarlo)
numero = numeroIntroducido;
alert("Si utilizas --numero se convierte en " + --numero); //Muestra el número introducido decrementado en 1 porque así primero resta 1 y después hace la instrucción (mostrarlo)

/** RESUMEN */
//Cuando pones los símbolos después primero realiza la instrucción y después incrementa o decrementa
//Cuando pones los símbolos antes primero hace el incremento o el decremento y después realiza la instrucción