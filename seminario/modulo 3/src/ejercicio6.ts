function esBisiesto(anio: number): boolean {
  if (anio % 400 === 0) return true;
  if (anio % 100 === 0) return false;
  if (anio % 4 === 0) return true;
  return false;
}

console.log(esBisiesto(2000));
console.log(esBisiesto(1900));
console.log(esBisiesto(2024));
console.log(esBisiesto(2023));
