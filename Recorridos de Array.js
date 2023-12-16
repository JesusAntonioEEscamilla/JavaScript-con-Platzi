// ======RECORRIDOS DE ARRAYS======

// El Array
var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]


//   Metodo Find
 /* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);
// ------RESULTADO------
//{nombre:"Laptop",costo:20000}



//   Metodo forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
// ------RESULTADO------
// Bici
// Tv
// Libro
// Celular
// Laptop
// Teclado
// Audifonos



//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);
// ------RESULTADO------
// true
// Esto quiere decir que sí hay artículos menores de 700