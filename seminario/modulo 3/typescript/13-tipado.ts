// Página 4 · Parte A.1: Declaración y tipado básico

function suma(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

console.log(suma(3, 4));        // 7
console.log(saludar("Sofía")); // Hola, Sofía

function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenCompra(producto: string, precio: number, descuento: number): string {
  const final = calcularDescuento(precio, descuento);
  return `${producto}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenCompra("Teclado", 120, 15));
console.log(resumenCompra("Monitor", 350, 20));
console.log(resumenCompra("Mouse", 45, 0));

function areaRectangulo(base: number, altura: number): number {
  return base * altura;
}

function perimetroRectangulo(base: number, altura: number): number {
  return 2 * (base + altura);
}

console.log(areaRectangulo(8, 5));      // 40
console.log(perimetroRectangulo(8, 5)); // 26
