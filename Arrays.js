// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax


var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // Longitud de Array


// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays inician en "0" 


// === Métodos para mutar arrays ===

frutas.push("Uvas"); // Esté método añadirá "Uvas" al final del array

frutas.pop("Uvas"); // Eliminará "Uvas" del final

frutas.unshift("Pera"); // Añade "Pera" al inicio 

frutas.shift("Pera"); // Elimina "Manzana" del inicio

var posición = frutas.indexOf("Cereza"); // Te dará la posición de ese item en el array