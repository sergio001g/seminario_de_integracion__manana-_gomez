// B.1 - Sintaxis y métodos básicos tipados
const numeros: number[] = [1, 2, 3, 4, 5];
const textos: Array<string> = ["a", "b", "c"];
const inferido = [10, 20, 30];

const dobles: number[] = numeros.map((n) => n * 2);
const pares: number[] = numeros.filter((n) => n % 2 === 0);
const suma: number = numeros.reduce((acc, n) => acc + n, 0);

numeros.push(6);
numeros.unshift(0);
const ultimo = numeros.pop();
const primero = numeros.shift();

const existe: boolean = numeros.includes(3);
const indice: number = numeros.indexOf(3);
const encontrado: number | undefined = numeros.find((n) => n > 4);

// Procesador de calificaciones
const calificaciones: number[] = [85, 92, 70, 55, 98, 63, 78];
const aprobados: number[] = calificaciones.filter((n) => n >= 70);
const reprobados: number[] = calificaciones.filter((n) => n < 70);
const promedio: number = Number(
  (calificaciones.reduce((acc, n) => acc + n, 0) / calificaciones.length).toFixed(1)
);
const maxima: number = Math.max(...calificaciones);
const minima: number = Math.min(...calificaciones);

console.log(`Aprobados: ${aprobados.length} | Reprobados: ${reprobados.length}`);
console.log(`Promedio: ${promedio} | Máxima: ${maxima} | Mínima: ${minima}`);

// B.2 - Arrays de objetos
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 999, disponible: true },
  { id: 2, nombre: "Mouse", precio: 25, disponible: true },
  { id: 3, nombre: "Monitor", precio: 350, disponible: false },
];

const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombres);
console.log(masBarato?.nombre);
console.log(disponibles.length);
