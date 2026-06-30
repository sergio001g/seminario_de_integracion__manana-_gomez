// Página 4 · Parte B.1: Parámetros opcionales y por defecto

function crearEtiqueta(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiqueta("info"));
console.log(crearEtiqueta("alerta", true));

function repetir(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetir("ha"));
console.log(repetir("ha", 5));

function log(mensaje: string, nivel: "info" | "warn" | "error" = "info", timestamp?: boolean): string {
  const prefijos: Record<"info" | "warn" | "error", string> = {
    info:  "ℹ️  INFO ",
    warn:  "⚠️  WARN ",
    error: "❌ ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(log("Servidor iniciado"));
console.log(log("Memoria alta", "warn"));
console.log(log("Conexión perdida", "error", true));

function formatearPrecio(monto: number, moneda: string = "USD", decimales: number = 2): string {
  return `${moneda} ${monto.toFixed(decimales)}`;
}

console.log(formatearPrecio(1234.5));
console.log(formatearPrecio(99, "EUR"));
console.log(formatearPrecio(50.125, "MXN", 1));
