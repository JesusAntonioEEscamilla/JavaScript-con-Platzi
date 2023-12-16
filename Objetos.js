// Objeto del mundo real
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

// Se llama el objeto con su propiedad
miAuto.marca 
// "Toyota"

// Se llama el objeto con su método
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020, 
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}
    
miAuto.detallesDelAuto();
// Auto Corolla 2020

//this -> Es una variable que hace referencia al objeto

// ==== Función Constructora =====
function auto(marca, modelo, annio) { 
    this.marca = marca;   
    this.modelo = modelo;
    this.annio = annio;
}

// Genera los objetos
var newAuto = new auto("Tesla", "Model 3", 2020);
var newAuto = new auto("Toyota", "Corolla", 2020);
var newAuto = new auto("Chevrolet", "Aveo Family", 2014);