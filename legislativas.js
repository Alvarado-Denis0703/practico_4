var partidolegislativo = /** @class */ (function () {
    function partidolegislativo() {
    }
    return partidolegislativo;
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
var Votantes = /** @class */ (function () {
    function Votantes() {
    }
    return Votantes;
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
    { nombre: "Diputado Eduardo Varela Cid", partidolegislativo: partidoslegislativos[0] },
    { nombre: "Diputado Julio De Vido", partidolegislativo: partidoslegislativos[0] },
    { nombre: "Diputado Juan Emilio Ameri", partidolegislativo: partidoslegislativos[1] },
    { nombre: "Cobos Julio", partidolegislativo: partidoslegislativos[1] },
    { nombre: "Omar de Marchi", partidolegislativo: partidoslegislativos[2] },
    { nombre: "Bermejo Adolfo", partidolegislativo: partidoslegislativos[2] },
    { nombre: "Laura Lopez", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Juan Roman Riquelme", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Lucinda Garto", partidolegislativo: partidoslegislativos[4] },
    { nombre: "Enzo Latrel", partidolegislativo: partidoslegislativos[4] },
];
var listas = [
    { nombre: "Lista verde", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "Lista roja", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Lista azul", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Lista amarilla", candidatos: [candidatos[6], candidatos[7]] },
];
function realizarVoto(votante, candidato) {
    var voto = { votante: votante, candidato: candidato };
    return voto;
}
