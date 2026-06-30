// Página 4 · Parte A.2: Funciones flecha

function cuadrado(n: number): number {
  return n * n;
}

const cuadradoFlecha = (n: number): number => {
  return n * n;
};

const cuadradoCorto = (n: number): number => n * n;

const ahora = (): string => new Date().toLocaleTimeString();

const doble = (n: number): number => n * 2;

console.log(cuadrado(5));
console.log(cuadradoFlecha(5));
console.log(cuadradoCorto(5));
console.log(doble(7));
console.log(ahora());

const trim = (s: string): string => s.trim();
const aMinusculas = (s: string): string => s.toLowerCase();
const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

function normalizarUsuario(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const entradas = ["  ANA GARCÍA  ", " luis rodríguez", "PEDRO  LÓPEZ "];
entradas.forEach((e) => console.log(normalizarUsuario(e)));

const esPar = (n: number): boolean => n % 2 === 0;
const esPositivo = (n: number): boolean => n > 0;
const enCelsius = (f: number): number => Number(((f - 32) * 5 / 9).toFixed(1));

console.log(esPar(4));
console.log(esPositivo(-3));
console.log(enCelsius(98.6));
