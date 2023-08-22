const codigosAcceso = [
    "ARQ2555: Sara Bel-Sun",
    "ARQ2556: Nodin Chavdri",
    "ARQ2557: Finn"
  ];
  
  const obtenerNombrePiloto = codigoAcceso => {
    const partes = codigoAcceso.split(':');
    const nombrePiloto = partes[1].trim();
    return nombrePiloto;
  };
  
  for (const codigoAcceso of codigosAcceso) {
    const nombrePiloto = obtenerNombrePiloto(codigoAcceso);
    console.log('El nombre del piloto es:', nombrePiloto);
  }
  