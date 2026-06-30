// Página 4 · Parte C.1: void, never e inferencia de retorno

function imprimirLinea(texto: string): void {
  console.log(texto);
}

function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {
    // proceso eterno
  }
}

function multiplicar(a: number, b: number) {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("División por cero");
  return a / b;
}

imprimirLinea("Línea imprimida");
console.log(multiplicar(4, 5));
console.log(dividir(10, 2));

function manejarRespuesta(codigo: 200 | 400 | 401 | 403 | 404 | 500, datos?: string): void {
  if (codigo === 200) {
    console.log(`Éxito: ${datos ?? "sin datos"}`);
    return;
  }
  procesarError(codigo);
}

function procesarError(codigo: 200 | 400 | 401 | 403 | 404 | 500): never {
  const mensajes: Partial<Record<200 | 400 | 401 | 403 | 404 | 500, string>> = {
    400: "Solicitud inválida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Recurso no encontrado",
    500: "Error interno del servidor",
  };
  throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuesta(200, "usuario cargado");

function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) {
    fallar(mensaje);
  }
}

asegurar(2 + 2 === 4, "Matemáticas rotas");
