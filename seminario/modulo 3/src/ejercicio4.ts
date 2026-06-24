function convertirTemp(celsius: number): number {
  return Number(((celsius * 9/5) + 32).toFixed(1));
}

console.log(convertirTemp(0));
console.log(convertirTemp(100));
console.log(convertirTemp(37));
