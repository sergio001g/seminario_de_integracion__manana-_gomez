// Página 3 · Parte B.6: break y continue

const paquetes2: number[] = [64, 128, -1, 256, 1024, -1, 32];
console.log("=== con continue ===");
for (const p of paquetes2) {
  if (p < 0) {
    console.log("Paquete corrupto ignorado");
    continue;
  }
  console.log(`Procesando ${p} bytes`);
}

console.log("=== con break ===");
for (const p of paquetes2) {
  if (p < 0) {
    console.log("Error crítico — deteniendo");
    break;
  }
  console.log(`Procesando ${p} bytes`);
}

const valores: number[] = [3, 7, 2, 9, 11, 4, 6];
for (const v of valores) {
  if (v % 2 !== 0) continue;
  console.log(`Par: ${v}`);
}
for (const v of valores) {
  if (v > 8) {
    console.log(`Mayor que 8: ${v}`);
    break;
  }
}
