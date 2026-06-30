// Página 4 · Parte B.2: Rest parameters

function sumarTodos(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumarTodos(1, 2, 3));
console.log(sumarTodos(10, 20, 30, 40));
console.log(sumarTodos());

function construirRuta(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRuta("https://api.ejemplo.com", "v1", "usuarios", "42"));

function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEvento("inicio");
registrarEvento("login", "usuario: ana", "ip: 192.168.1.10");
registrarEvento("error", "módulo: pagos", "código: 503", "reintento: sí");

function maximo(primero: number, ...resto: number[]): number {
  return [primero, ...resto].reduce((max, n) => (n > max ? n : max), primero);
}

function minimo(primero: number, ...resto: number[]): number {
  return [primero, ...resto].reduce((min, n) => (n < min ? n : min), primero);
}

console.log(maximo(3, 1, 4, 1, 5, 9, 2, 6));
console.log(minimo(3, 1, 4, 1, 5, 9, 2, 6));
