let numero = 100;

console.log("BUCLE WHILE:");
while (numero >= 1) {
    if (numero % 2 != 0) {
        if(numero % 3 != 0 && numero % 7 != 0){
            console.log(numero);
        }
    }
    numero--;
}

numero = 100;

console.log("BUCLE DO WHILE:");
do{

    if (numero % 2 != 0) {
        if(numero % 3 != 0 && numero % 7 != 0){
            console.log(numero);
        }
    }

    numero--;

}while(numero >= 1);


console.log("BUCLE FOR:");
for(let i = 100; i >= 1; i--){

    if (i % 2 != 0) {
        if(i % 3 != 0 && i % 7 != 0){
            console.log(i);
        }
    }

}