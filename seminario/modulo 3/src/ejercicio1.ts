const NOMBRE_TIENDA: string = "TechStore";
const IVA: number = 0.19;
const ABIERTA: boolean = true;

let stockDisponible: number = 100;
let categoriaActual: string = "electronica";

console.log("Tienda:", NOMBRE_TIENDA);
console.log("IVA:", IVA);
console.log("Abierto:", ABIERTA);
console.log("Stock inicial:", stockDisponible);
console.log("Categoría inicial:", categoriaActual);

stockDisponible = 95;
categoriaActual = "ropa";

console.log("Stock modificado:", stockDisponible);
console.log("Categoría modificada:", categoriaActual);
