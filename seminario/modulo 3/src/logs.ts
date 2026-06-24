type NivelLog = "INFO" | "WARN" | "ERROR";

function log(nivel: NivelLog, servicio: string, mensaje: string): string {
  const timestamp = new Date().toISOString();
  const prefijo = nivel === "ERROR" ? "❌" : nivel === "WARN" ? "⚠️ " : "✅";
  return `[${timestamp}] ${prefijo} [${nivel}] [${servicio}] ${mensaje}`;
}

console.log(log("INFO", "AuthService", "Usuario 'ana' ha iniciado sesión"));
console.log(log("WARN", "DbPool", "Conexiones al 80% de capacidad"));
console.log(log("ERROR", "PaymentGW", "Timeout al procesar pago #4821"));
