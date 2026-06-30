// Página 4 · Parte D.1: Funciones de orden superior

type Transformador = (x: number) => number;
type Predicado = (x: number) => boolean;

function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

const triple = multiplicadorDe(3);
const cuadradoFn: Transformador = (x) => x * x;

console.log(aplicar(5, triple));
console.log(aplicar(5, cuadradoFn));
console.log(aplicar(5, (x) => x + 10));

function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(nums, (n) => n % 2 === 0));
console.log(filtrar(nums, (n) => n > 5));

// Ejemplo aplicado — pipeline de pedidos

type Pedido = { id: number; total: number; cliente: string };
type ProcesadorPedido = (pedido: Pedido) => Pedido;

const aplicarIVA: ProcesadorPedido = (p) => ({
  ...p,
  total: Number((p.total * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorPedido =>
  (p) => ({ ...p, total: Number((p.total * (1 - descuento)).toFixed(2)) });

function procesarPedido(pedido: Pedido, pasos: ProcesadorPedido[]): Pedido {
  return pasos.reduce((p, fn) => fn(p), pedido);
}

const pedido: Pedido = { id: 101, total: 100, cliente: "Ana" };
const resultado = procesarPedido(pedido, [
  aplicarDescuentoVIP(0.10),
  aplicarIVA,
]);
console.log(resultado);

function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T): T => fns.reduceRight((valor, fn) => fn(valor), x);
}

const trimFn = (s: string): string => s.trim();
const lower = (s: string): string => s.toLowerCase();
const capitalizarFn = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const compuesta = componer(capitalizarFn, lower, trimFn);
console.log(compuesta(" HOLA MUNDO "));
