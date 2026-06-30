// Página 3 · Parte B.2: for...of

const protocolos: string[] = ["HTTP", "HTTPS", "FTP", "SSH"];
for (const protocolo of protocolos) {
  console.log(protocolo);
}

for (const letra of "TS") {
  console.log(letra);
}

for (const [indice, valor] of protocolos.entries()) {
  console.log(`${indice}: ${valor}`);
}

interface Item {
  nombre: string;
  precio: number;
  cantidad: number;
}

const carrito: Item[] = [
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 80, cantidad: 1 },
  { nombre: "Monitor", precio: 200, cantidad: 3 },
];

let totalCarrito = 0;
for (const item of carrito) {
  const subtotal = item.precio * item.cantidad;
  console.log(`${item.nombre}: $${subtotal}`);
  totalCarrito += subtotal;
}
console.log(`TOTAL: $${totalCarrito}`);

const temps: number[] = [18, 22, 25, 30, 19, 27];
let maxTemp = temps[0];
let sumaTemp = 0;
for (const temp of temps) {
  if (temp > maxTemp) {
    maxTemp = temp;
  }
  sumaTemp += temp;
}
console.log(`Temperatura máxima: ${maxTemp}`);
console.log(`Promedio: ${Number((sumaTemp / temps.length).toFixed(2))}`);
