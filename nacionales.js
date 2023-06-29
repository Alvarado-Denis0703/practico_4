// Definir las listas de partidos políticos, candidatos y listas
var partidosPoliticos = [
    { nombre: "Frente de Todos" },
    { nombre: "Juntos por el Cambio" },
    { nombre: "Consenso Federal" },
    { nombre: "Frente de Izquierda y de los Trabajadores-Unidad" },
    { nombre: "Frente Nos" },
    { nombre: "Unite por la Libertad y la Dignidad" }
];
var candidatos = [
    { nombre: "Alberto Fernández", partidoPolitico: partidosPoliticos[0] },
    { nombre: "Cristina Fernández de Kirchner", partidoPolitico: partidosPoliticos[0] },
    { nombre: "Mauricio Macri", partidoPolitico: partidosPoliticos[1] },
    { nombre: "Miguel Ángel Pichetto", partidoPolitico: partidosPoliticos[1] },
    { nombre: "Roberto Lavagna", partidoPolitico: partidosPoliticos[2] },
    { nombre: "Juan Manuel Urtubey", partidoPolitico: partidosPoliticos[2] },
    { nombre: "Nicolás del Caño", partidoPolitico: partidosPoliticos[3] },
    { nombre: "Romina Del Plá", partidoPolitico: partidosPoliticos[3] },
    { nombre: "Juan José Gómez Centurión", partidoPolitico: partidosPoliticos[4] },
    { nombre: "Cynthia Hotton", partidoPolitico: partidosPoliticos[4] },
    { nombre: "José Luis Espert", partidoPolitico: partidosPoliticos[5] },
    { nombre: "Luis Rosales", partidoPolitico: partidosPoliticos[5] }
];
var listas = [
    { nombre: "Peronista", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "Radical", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Peronista", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Izquierda Socialista", candidatos: [candidatos[6], candidatos[7]] },
    { nombre: "Conservador", candidatos: [candidatos[8], candidatos[9]] },
    { nombre: "Livertario", candidatos: [candidatos[10], candidatos[11]] }
];
// Función para realizar un voto
function realizarVoto(votante, candidato) {
    var voto = { votante: votante, candidato: candidato };
    return voto;
}
// Ejemplo de uso
var votante1 = { nombre: "Jesus", dni: "01" };
var votante2 = { nombre: "Denis", dni: "02" };
var votante3 = { nombre: "David", dni: "03" };
var votante4 = { nombre: "Ticiana", dni: "04" };
var voto1 = realizarVoto(votante1, candidatos[2]);
var voto2 = realizarVoto(votante2, candidatos[6]);
var voto3 = realizarVoto(votante3, candidatos[4]);
var voto4 = realizarVoto(votante4, candidatos[0]);
console.log("Voto 1:", voto1);
console.log("Voto 2:", voto2);
console.log("Voto 3:", voto3);
console.log("Voto 4:", voto4);
