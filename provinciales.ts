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
    { nombre: "Cambia Mendoza" },
    { nombre: "La Unión Mnedocina" },
    { nombre: "Elegí Mendoza" },
    { nombre: "Partido Verde" },
    { nombre: "Frente de Izquierda" },
    
  ];
  
  const candidatos: Candidato[] = [
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
  
  const listas: Lista[] = [
    { nombre: "Cambia Mendoza", candidatos: [candidatos[0], candidatos[1]] },
    { nombre: "La Unión Mnedocina", candidatos: [candidatos[2], candidatos[3]] },
    { nombre: "Elegí Mendoza", candidatos: [candidatos[4], candidatos[5]] },
    { nombre: "Partido Verde", candidatos: [candidatos[6], candidatos[7]] },
    { nombre: "Frente de Izquierda", candidatos: [candidatos[8], candidatos[9]] },
    
  ];
  
  // Función para realizar un voto
  
  function realizarVoto(votante: Votante, candidato: Candidato): Voto {
    const voto: Voto = { votante, candidato };
    return voto;
  }
  
  // Ejemplo de uso
  
  const votante1: Votante = { nombre: "David", dni: "43485264" };
  const votante2: Votante = { nombre: "Jesus", dni: "38359125" };
  const votante3: Votante = { nombre: "Ticiana", dni: "44489267" };
  const votante4: Votante = { nombre: "Denis", dni: "44896248" };
  
  const voto1: Voto = realizarVoto(votante1, candidatos[0]);
  const voto2: Voto = realizarVoto(votante2, candidatos[2]);
  const voto3: Voto = realizarVoto(votante3, candidatos[1]);
  const voto4: Voto = realizarVoto(votante4, candidatos[5]);
  
  console.log("Voto 1:", voto1);
  console.log("Voto 2:", voto2);
  console.log("Voto 3:", voto3);
  console.log("Voto 4:", voto4);