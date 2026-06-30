// Página 3 · Parte B.4: forEach / map

const numeros: number[] = [1, 2, 3, 4];
numeros.forEach((n) => console.log(n * 10));
const dobles: number[] = numeros.map((n) => n * 2);
console.log(dobles);

const emails: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];
const limpios: string[] = emails.map((e) => e.trim().toLowerCase());
console.log(limpios);
limpios.forEach((e, i) => console.log(`Usuario ${i + 1}: ${e}`));

const precios: number[] = [100, 250, 80, 500];
const preciosConIVA: number[] = precios.map((p) => Number((p * 1.19).toFixed(2)));
preciosConIVA.forEach((p) => console.log(`Precio con IVA: $${p}`));
