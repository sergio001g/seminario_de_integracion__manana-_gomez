// C.1 - Tuplas básicas y con nombre
type Coordenada = [number, number];
type RGB = [number, number, number];
type Entrada = [string, number];

const punto: Coordenada = [10.5, -3.2];
const color: RGB = [255, 128, 0];
const par: Entrada = ["temperatura", 36.6];

const [x, y] = punto;
const [rojo, verde, azul] = color;
const [clave, valor] = par;

console.log(`Punto: x=${x}, y=${y}`);
console.log(`Color: rgb(${rojo},${verde},${azul})`);

// Tuplas con nombre
type Rango = [inicio: number, fin: number];
const horario: Rango = [9, 18];

// Retorno múltiple de una función
function dividir(a: number, b: number): [number, string] {
  if (b === 0) return [0, "Error: división por cero"];
  return [a / b, "ok"];
}

const [resultado, estado] = dividir(10, 2);
console.log(`${estado}: ${resultado}`);

const [res2, estado2] = dividir(5, 0);
console.log(`${estado2}: ${res2}`);
