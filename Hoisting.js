// Esto es un hoisting de declarar una variable y después llamarla
var miNombre = undefined;

console.log(miNombre + " Soy un hoisting");

miNombre = "Jesus Antonio";


// Esto es un hoisting de una función
hey();

function hey(){
    console.log("Hola " + miNombre);
}