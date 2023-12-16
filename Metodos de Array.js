// ======MÉTODOS DE ARRAYS======

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

//   Método Filter  
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 500 */ 
});

console.log(articulosFiltrados);
// ------RESULTADO------
// 0: {nombre: "Libro", costo: 320}
// 1: {nombre: "Teclado", costo: 500}
// length: 2



//   Metodo Map 

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});

console.log(nombreArticulos);
// ------RESULTADO------
// (7) ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]