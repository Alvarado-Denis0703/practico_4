     class partidoslegislativo {
    nombre: string;
  }
  
     class Candidato {
    nombre: string;
    partidolegislativo: partidoslegislativo;
  }
  
     class Lista {
    nombre: string;
    candidatos: Candidato[];
  }
  
     class Votante {
    nombre: string;
    dni: string;
  }
  
     class Voto {
    votante: Votante;
    candidato: Candidato;
  }
  
 
  const partidoslegislativos: partidoslegislativo[] = [
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
    { nombre: "Candidato 7", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Candidato 8", partidolegislativo: partidoslegislativos[3] },
    { nombre: "Candidato 9", partidolegislativo: partidoslegislativos[4] },
    { nombre: "Candidato 10", partidolegislativo: partidoslegislativos[4] },

  ];
  
  const listas: Lista[] = [
    { nombre: "Lista 1", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "Lista 2", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Lista 3", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Lista 4", candidatos: [candidatos[6], candidatos[7]] },
  
  ];
  
  
  function realizarVoto(votante: Votante, candidato: Candidato): Voto {
    const voto: Voto = { votante, candidato };
    return voto;
  }
  
  // Ejemplo de uso
  
  const votante1: Votante = { nombre: "Denis", dni: "44907469" };
  const votante2: Votante = { nombre: "Ticiana", dni: "46620074" };
  
  const voto1: Voto = realizarVoto(votante1, candidatos[0]);
  const voto2: Voto = realizarVoto(votante2, candidatos[2]);
  
  console.log("Voto 1:", voto1);
  console.log("Voto 3:", voto2);
