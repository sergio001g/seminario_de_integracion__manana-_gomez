// Página 3 · Parte B.5: while y do-while

let buffer = 1024;
let paquete = 0;
while (buffer > 0) {
  const tam = buffer > 256 ? 256 : buffer;
  paquete++;
  buffer -= tam;
  console.log(`Paquete ${paquete}: ${tam} bytes (quedan ${buffer})`);
}

let intentos = 0;
let conectado = false;
do {
  intentos++;
  console.log(`Intento de conexión #${intentos}...`);
  if (intentos === 3) conectado = true;
} while (!conectado && intentos < 5);
console.log(conectado ? `Conectado en ${intentos} intentos` : "Falló");

let tiradas = 0;
let dado = 0;
do {
  tiradas++;
  dado = Math.floor(Math.random() * 6) + 1;
  console.log(`Tirada ${tiradas}: ${dado}`);
} while (dado !== 6);
console.log(`Salió 6 en ${tiradas} tiradas`);
