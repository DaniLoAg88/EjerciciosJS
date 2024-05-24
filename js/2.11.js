const PI = 3.1416;
var numeroGlobal = 0;
let numeroLocal = 0;

for (let i = 0; i < 5; i++) {
    // PI = 4; La comento porque como es una constante no puede modificar su valor y da error
    var numeroGlobal = 3;
    let numeroLocal = 4;
    console.log(PI);
    console.log(numeroGlobal);
    console.log(numeroLocal);
}

console.log("YA ESTAMOS FUERA DEL FOR");
console.log(PI);
console.log(numeroGlobal);
console.log(numeroLocal);
// Aquí podemos apreciar en el log como la variable declarada como global con var cuando sale del for sigue teniendo el valor que le damos dentro del for
// Aquí podemos apreciar en el log como la variable declarada como local con let cuando sale del for sigue teniendo el valor que le damos antes del for, porque la de dentro muere con el for