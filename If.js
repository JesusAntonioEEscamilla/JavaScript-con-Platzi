// La estructura de la condición If
if (true){
    console.log("Hola");
}

// La estructura de la condición If y Else
if (false){
    console.log("Hola");
} else {
    console.log("Soy un falso");
}


// La estructura de la condición de If, ElseIf y Else
var edad = 18;

if (edad === 18){
    console.log("Puedes votar sera tu 1ra votación");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}


// Operador ternario
condition ? true : false;


var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";