// Juego Piedra, Papel y Tijera

// Variables
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

// Función con las condiciones adentro de la función
var resultado = function(user, pc){
    if(user != pc){
        if(user === op1 && pc === op3){
            console.log("El usuario gano con: " + op1);
        }else if(user === op2 && pc === op1){
            console.log("El usuario gano con: " + op3);
        }else if(user === op3 && pc === op2){
            console.log("El usuario gano con: " + op2);
        }else{
            console.log("La pc gana!")
        }
    }else if(user === pc){
        console.log("Es un empate!!")
    }
};

// Resultado del juego
resultado(op1, op3);