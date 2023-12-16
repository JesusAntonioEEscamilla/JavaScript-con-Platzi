// Juego Piedra, Papel y Tijera 2

// Variables
var pregunta = prompt("Ingrese su decisión: piedra, papel o tijera");
var decision = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var maquina = options[Math.floor(Math.random() * 3)];

// El switch para el juego
switch (true) {
    case decision == "papel" && maquina == "piedra":
        alert("Ganaste crack! La maquina eligió: " + maquina);
        break;
    case decision == "piedra" && maquina == "tijera":
        alert("Ganaste crack! La maquina eligió: " + maquina);
        break;
    case decision == "tijera" && maquina == "papel":
        alert("Ganaste crack! La maquina eligió: " + maquina);
        break;
    case decision == maquina:
        alert("Ufffs, empate. La maquina eligió: " + maquina + ", también.");
        break;
    default:
        alert("Perdiste mastodonte, suerte en la próxima. La maquina eligió: " + maquina);
}