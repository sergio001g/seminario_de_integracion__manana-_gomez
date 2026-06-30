// Página 3 · Parte A.3: if / else if / else y switch

const nota: number = 75;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("Reprobado");
}

const codigo: number = 404;
switch (codigo) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("No encontrado");
    break;
  case 500:
    console.log("Error del servidor");
    break;
  default:
    console.log("Código desconocido");
}

const lecturas: number[] = [-45, -62, -71, -83, -95];
for (const dbm of lecturas) {
  let clasificacion: string;
  if (dbm >= -50) {
    clasificacion = `Excelente (${dbm} dBm)`;
  } else if (dbm >= -60) {
    clasificacion = `Buena (${dbm} dBm)`;
  } else if (dbm >= -70) {
    clasificacion = `Aceptable (${dbm} dBm)`;
  } else if (dbm >= -80) {
    clasificacion = `Débil (${dbm} dBm)`;
  } else {
    clasificacion = `Sin cobertura (${dbm} dBm)`;
  }
  console.log(clasificacion);
}

const bateria: number = 25;
if (bateria < 10) {
  console.log("🔴 Crítica");
} else if (bateria < 30) {
  console.log("🟠 Baja");
} else if (bateria < 60) {
  console.log("🟡 Media");
} else if (bateria < 90) {
  console.log("🟢 Buena");
} else {
  console.log("⚡ Completa");
}

const diaSemana: number = 3;
switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
}
