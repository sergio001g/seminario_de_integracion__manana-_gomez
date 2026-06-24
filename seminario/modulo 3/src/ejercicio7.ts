const precios: number[] = [120, 35, 450, 89, 210, 15];

const preciosMayor100: number[] = precios.filter((p) => p > 100);
const preciosDescuento: number[] = preciosMayor100.map((p) => p * 0.9);
const total: number = preciosDescuento.reduce((acc, p) => acc + p, 0);

console.log("Precios > 100 con descuento 10%:", preciosDescuento);
console.log("Total:", total);
