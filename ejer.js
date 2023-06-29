var partidoslegislativo = /** @class */ (function () {
    function partidoslegislativo() {
    }
    return partidoslegislativo;
}());
var Candidato = /** @class */ (function () {
    function Candidato() {
    }
    return Candidato;
}());
var Lista = /** @class */ (function () {
    function Lista() {
    }
    return Lista;
}());
var Votante = /** @class */ (function () {
    function Votante() {
    }
    return Votante;
}());
var Voto = /** @class */ (function () {
    function Voto() {
    }
    return Voto;
}());
var partidoslegislativos = [
    { nombre: "partido 1" },
    { nombre: "partido 2" },
    { nombre: "partido 3" },
    { nombre: "Partido 4" },
];
var candidatos = [
    { nombre: "Diputado Eduardo Varela Cid	", partidolegislativo: partidoslegislativos[0] },
    { nombre: "Diputado Julio De Vido", partidolegislativo: partidoslegislativos[0] },
    { nombre: "Diputado Juan Emilio Ameri", partidolegislativo: partidoslegislativos[1] },
    { nombre: "Cobos Julio", partidolegislativo: partidoslegislativos[1] },
    { nombre: "Omar de Marchi", partidolegislativo: partidoslegislativos[2] },
    { nombre: "Bermejo Adolfo", partidolegislativo: partidoslegislativos[2] },
    { nombre: "Candidato 7", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Candidato 8", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Candidato 9", partidolegislativo: partidoslegislativos[4] },
    { nombre: "Candidato 10", partidolegislativo: partidoslegislativos[4] },
];
var listas = [
    { nombre: "Lista 1", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "Lista 2", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Lista 3", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Lista 4", candidatos: [candidatos[6], candidatos[7]] },
];
function realizarVoto(votante, candidato) {
    var voto = { votante: votante, candidato: candidato };
    return voto;
}
// Ejemplo de uso
var votante1 = { nombre: "Denis", dni: "44907469" };
var votante2 = { nombre: "Ticiana", dni: "46620074" };
var voto1 = realizarVoto(votante1, candidatos[0]);
var voto2 = realizarVoto(votante2, candidatos[2]);
console.log("Voto 1:", voto1);
console.log("Voto 3:", voto2);
