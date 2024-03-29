// Definimos el Array
var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 
// Función saludar
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// ---- BUCLE FOR (ITERADOR)----
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}
// ----RESULTADOS----
// Hola, María
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel


// ---- BUCLE FOR CON OF (TODO) ----
for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}
// ----RESULTADOS----
// Hola, María
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel


// ---- BUCLE FOR CON IN (TODO) ----
for (var estudiante in estudiantes) {
    saludarEstudiante(estudiante);
}
// ----RESULTADOS----
// Hola, 1
// Hola, 2
// Hola, 3
// Hola, 4