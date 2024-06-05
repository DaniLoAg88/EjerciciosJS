let pass;
let acceso = false;

do{
    pass = Number(prompt("Introduzca contraseña"));

    if(pass == "1234"){
        alert("ACCESO CORRECTO");
        acceso = true;
    } else{
        alert("CONTRASEÑA INCORRECTA, NO PUEDE ACCEDER");
    }

}while (!acceso);

//Es mejor utilizar el do while porque para acceder hay que meter la contraseña al menos una vez