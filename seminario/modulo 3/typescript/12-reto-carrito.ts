// Página 3 · Reto final de clase: validador de carrito

const carritoReto = [
  { nombre: "A", precio: 50, stock: 3, pedido: 2 },
  { nombre: "B", precio: 0, stock: 10, pedido: 1 },
  { nombre: "C", precio: 30, stock: 1, pedido: 5 },
];

let totalReto = 0;
for (const productoReto of carritoReto) {
  if (productoReto.precio <= 0) {
    console.log(`Producto sin precio: ${productoReto.nombre}`);
    continue;
  }
  if (productoReto.pedido > productoReto.stock) {
    console.log(`Sin stock suficiente de ${productoReto.nombre}`);
    continue;
  }
  totalReto += productoReto.precio * productoReto.pedido;
}
console.log(`Total a pagar: $${totalReto}`);
