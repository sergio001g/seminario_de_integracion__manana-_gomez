function formatearPrecio(
  producto: string,
  precio: number,
  moneda: string,
  descuentoPct?: number
): string {
  let precioFinal = precio;
  if (descuentoPct !== undefined) {
    precioFinal = precio * (1 - descuentoPct / 100);
  }
  const precioStr = precio.toFixed(2).replace(".", ",");
  const precioFinalStr = precioFinal.toFixed(2).replace(".", ",");
  if (descuentoPct !== undefined) {
    return `${producto} → $${precioStr} ${moneda} (descuento ${descuentoPct}% → $${precioFinalStr} ${moneda})`;
  } else {
    return `${producto} → $${precioStr} ${moneda}`;
  }
}

console.log(formatearPrecio("Laptop", 1299.0, "USD"));
console.log(formatearPrecio("Teléfono", 899.99, "EUR", 10));
console.log(formatearPrecio("Audífonos", 199.5, "USD", 20));
