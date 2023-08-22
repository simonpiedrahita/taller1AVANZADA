let temperaturaMaxima = 30;
let temperaturaMinima = 15;
let calcularTemperaturaMediaFlecha = (temperaturaMaxima, temperaturaMinima) => {
    return (temperaturaMaxima + temperaturaMinima) / 2;
  };
  
  const temperaturaMedia = calcularTemperaturaMediaFlecha(temperaturaMaxima, temperaturaMinima);

  console.log('La temperatura maxima es:', temperaturaMaxima);
  console.log('La temperatura minima es:', temperaturaMinima);
  console.log('La temperatura media es:', temperaturaMedia);