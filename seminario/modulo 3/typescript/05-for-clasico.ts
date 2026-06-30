// Página 3 · Parte B.1: for clásico

for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}

for (let i = 0; i <= 100; i += 25) {
  console.log(`Progreso: ${i}%`);
}

for (let i = 5; i >= 1; i--) {
  console.log(`Lanzamiento en ${i}...`);
}

const numeroTabla: number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}

let suma1a100 = 0;
for (let i = 1; i <= 100; i++) {
  suma1a100 += i;
}
console.log(`Total 1 a 100: ${suma1a100}`);

let sumaPares = 0;
for (let i = 2; i <= 100; i += 2) {
  sumaPares += i;
}
console.log(`Total pares 1 a 100: ${sumaPares}`);
