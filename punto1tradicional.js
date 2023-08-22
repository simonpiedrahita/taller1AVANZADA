let x1, x2 = 0;
let y1, y2 = 0;

function punto1(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const distancia = punto1(2, 5, 25, 45);
console.log("La distancia entre el planeta X y el planeta Y es:", distancia);
