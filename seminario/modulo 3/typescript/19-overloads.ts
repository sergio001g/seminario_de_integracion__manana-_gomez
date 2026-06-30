// Página 4 · Parte E.1: Sobrecargas de función

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;
function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "Sí" : "No";
  }
  return `"${valor}"`;
}

console.log(formatear(1234567.5));
console.log(formatear(true));
console.log(formatear("activo"));

type Producto = { id: number; nombre: string; precio: number };
const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Teclado", precio: 80 },
  { id: 3, nombre: "Monitor", precio: 350 },
];

function buscar(id: number): Producto | undefined;
function buscar(nombre: string): Producto[];
function buscar(criterio: number | string): Producto | Producto[] | undefined {
  if (typeof criterio === "number") {
    return catalogo.find((p) => p.id === criterio);
  }
  const termino = criterio.toLowerCase();
  return catalogo.filter((p) => p.nombre.toLowerCase().includes(termino));
}

console.log(buscar(2));
console.log(buscar("o"));

function convertir(valor: number, a: "binario" | "hex"): string;
function convertir(valor: string, desde: "binario" | "hex"): number;
function convertir(valor: number | string, base: "binario" | "hex"): string | number {
  if (typeof valor === "number") {
    return base === "binario"
      ? valor.toString(2)
      : valor.toString(16);
  }
  return base === "binario"
    ? parseInt(valor, 2)
    : parseInt(valor, 16);
}

console.log(convertir(255, "hex"));
console.log(convertir("ff", "hex"));
