interface PartidoPolitico {
  nombre: string;
}

interface Candidato {
  nombre: string;
  partidoPolitico: PartidoPolitico;
}

interface Lista {
  nombre: string;
  candidatos: Candidato[];
}

interface Votante {
  nombre: string;
  dni: string;
}

interface Voto {
  votante: Votante;
  candidato: Candidato;
}

// Definir las listas de partidos políticos, candidatos y listas

const partidosPoliticos: PartidoPolitico[] = [
  { nombre: "Frente de Todos" },
  { nombre: "Juntos por el Cambio" },
  { nombre: "Consenso Federal" },
  { nombre: "Frente de Izquierda y de los Trabajadores-Unidad" },
  { nombre: "Frente Nos" },
  { nombre: "Unite por la Libertad y la Dignidad" }
];

const candidatos: Candidato[] = [
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

const listas: Lista[] = [
  { nombre: "Peronista", candidatos: [candidatos[0], candidatos[1]] },
  { nombre: "Radical", candidatos: [candidatos[2], candidatos[3]] },
  { nombre: "Peronista", candidatos: [candidatos[4], candidatos[5]] },
  { nombre: "Izquierda Socialista", candidatos: [candidatos[6], candidatos[7]] },
  { nombre: "Conservador", candidatos: [candidatos[8], candidatos[9]] },
  { nombre: "Livertario", candidatos: [candidatos[10], candidatos[11]] }
];

// Función para realizar un voto

function realizarVoto(votante: Votante, candidato: Candidato): Voto {
  const voto: Voto = { votante, candidato };
  return voto;
}

// Ejemplo de uso

const votante1: Votante = { nombre: "Jesus", dni: "01" };
const votante2: Votante = { nombre: "Denis", dni: "02" };
const votante3: Votante = { nombre: "David", dni: "03" };
const votante4: Votante = { nombre: "Ticiana", dni: "04" };

const voto1: Voto = realizarVoto(votante1, candidatos[2]);
const voto2: Voto = realizarVoto(votante2, candidatos[6]);
const voto3: Voto = realizarVoto(votante3, candidatos[4]);
const voto4: Voto = realizarVoto(votante4, candidatos[0]);

console.log("Voto 1:", voto1);
console.log("Voto 2:", voto2);
console.log("Voto 3:", voto3);
console.log("Voto 4:", voto4);