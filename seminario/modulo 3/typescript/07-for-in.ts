// Página 3 · Parte B.3: for...in

const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(`${servicio} → puerto ${puertos[servicio]}`);
}

const config = {
  host: "localhost",
  port: 8080,
  debug: true,
  maxConexiones: 100,
};

console.log("=== Configuración activa ===");
for (const clave in config) {
  const valor = config[clave as keyof typeof config];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}

const notas: Record<string, number> = {
  mate: 85,
  fisica: 70,
  quimica: 95,
  historia: 60,
};
let aprobadas = 0;
for (const materia in notas) {
  const notaMateria = notas[materia];
  console.log(`${materia}: ${notaMateria}`);
  if (notaMateria >= 70) {
    aprobadas++;
  }
}
console.log(`Materias aprobadas: ${aprobadas}`);
