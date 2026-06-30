// Página 3 · Parte A.1: if simple — un solo camino

const temperatura: number = 38;
if (temperatura > 37.5) {
  console.log("Tienes fiebre");
}

const producto: string = "Teclado mecánico";
const unidades: number = 3;
if (unidades < 5) {
  console.log(`⚠️  Reponer "${producto}": quedan ${unidades} unidades`);
}

const producto2: string = "Mouse";
const unidades2: number = 40;
if (unidades2 < 5) {
  console.log(`⚠️  Reponer "${producto2}": quedan ${unidades2} unidades`);
}

const edad: number = 17;
if (edad >= 18) {
  console.log("Acceso permitido");
}
