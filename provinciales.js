// Definir las listas de partidos políticos, candidatos y listas
var partidosPoliticos = [
    { nombre: "Cambia Mendoza" },
    { nombre: "La Unión Mnedocina" },
    { nombre: "Elegí Mendoza" },
    { nombre: "Partido Verde" },
    { nombre: "Frente de Izquierda" },
];
var candidatos = [
    { nombre: "Alfredo Cornejo", partidoPolitico: partidosPoliticos[0] },
    { nombre: "Luis Petri", partidoPolitico: partidosPoliticos[0] },
    { nombre: "Omar de Marchi", partidoPolitico: partidosPoliticos[1] },
    { nombre: "Omar de Marchi", partidoPolitico: partidosPoliticos[1] },
    { nombre: "Omar Parisi", partidoPolitico: partidosPoliticos[2] },
    { nombre: "Guillermo Carmona", partidoPolitico: partidosPoliticos[2] },
    { nombre: "Mario Vadillo", partidoPolitico: partidosPoliticos[3] },
    { nombre: "Alejandro Sosa", partidoPolitico: partidosPoliticos[3] },
    { nombre: "Lautaro Jiménes", partidoPolitico: partidosPoliticos[4] },
    { nombre: "Victor da Vila", partidoPolitico: partidosPoliticos[4] },
];
var listas = [
    { nombre: "Cambia Mendoza", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "La Unión Mnedocina", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Elegí Mendoza", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Partido Verde", candidatos: [candidatos[6], candidatos[7]] },
    { nombre: "Frente de Izquierda", candidatos: [candidatos[8], candidatos[9]] },
];
// Función para realizar un voto
function realizarVoto(votante, candidato) {
    var voto = { votante: votante, candidato: candidato };
    return voto;
}
// Ejemplo de uso
var votante1 = { nombre: "David", dni: "43485264" };
var votante2 = { nombre: "Jesus", dni: "38359125" };
var votante3 = { nombre: "Ticiana", dni: "44489267" };
var votante4 = { nombre: "Denis", dni: "44896248" };
var voto1 = realizarVoto(votante1, candidatos[0]);
var voto2 = realizarVoto(votante2, candidatos[2]);
var voto3 = realizarVoto(votante3, candidatos[1]);
var voto4 = realizarVoto(votante4, candidatos[5]);
console.log("Voto 1:", voto1);
console.log("Voto 2:", voto2);
console.log("Voto 3:", voto3);
console.log("Voto 4:", voto4);
