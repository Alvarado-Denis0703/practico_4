class partidolegislativo {
  nombre: string;
}

class Candidato {
  nombre: string;
  partidolegislativo: partidolegislativo;
}

class Lista {
  nombre: string;
  candidatos: Candidato[];
}

class Votantes {
  nombre: string;
  dni: string;
}

class Voto {
  votante: Votantes;
  candidato: Candidato;
}


const partidoslegislativos: partidolegislativo[] = [
  { nombre: "partido 1" },
  { nombre: "partido 2" },
  { nombre: "partido 3" },
  { nombre: "Partido 4" },
];

const candidatos: Candidato[] = [
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

const listas: Lista[] = [
  { nombre: "Lista verde", candidatos: [candidatos[0], candidatos[1]] },
  { nombre: "Lista roja", candidatos: [candidatos[2], candidatos[3]] },
  { nombre: "Lista azul", candidatos: [candidatos[4], candidatos[5]] },
  { nombre: "Lista amarilla", candidatos: [candidatos[6], candidatos[7]] },

];


function realizarVoto(votante: Votantes, candidato: Candidato): Voto {
  const voto: Voto = { votante, candidato };
  return voto;
}

// Ejemplo de uso

const votante1: Votantes = { nombre: "Denis", dni: "44907469" };
const votante2: Votantes = { nombre: "Ticiana", dni: "46620074" };

const voto1: Voto = realizarVoto(votante1, candidatos[0]);
const voto2: Voto = realizarVoto(votante2, candidatos[2]);

console.log("Voto 1:", voto1);
console.log("Voto 3:", voto2);
