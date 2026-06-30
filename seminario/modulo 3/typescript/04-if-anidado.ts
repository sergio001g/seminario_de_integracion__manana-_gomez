// Página 3 · Parte A.4: if anidado

const logueado: boolean = true;
const esAdmin: boolean = false;

if (logueado) {
  if (esAdmin) {
    console.log("Panel de administrador");
  } else {
    console.log("Panel de usuario");
  }
} else {
  console.log("Por favor inicia sesión");
}

const saldo: number = 500;
const monto: number = 200;
const pinCorrecto: boolean = true;
let resultado: string;

if (pinCorrecto) {
  if (monto <= saldo) {
    if (monto % 10 === 0) {
      resultado = `✅ Entregando $${monto}. Saldo restante: $${saldo - monto}`;
    } else {
      resultado = "❌ El monto debe ser múltiplo de 10";
    }
  } else {
    resultado = "❌ Saldo insuficiente";
  }
} else {
  resultado = "❌ PIN incorrecto";
}
console.log(resultado);

const monto2: number = 700;
const pinCorrecto2: boolean = true;
let resultado2: string;

if (pinCorrecto2) {
  if (monto2 <= saldo) {
    resultado2 = monto2 % 10 === 0
      ? `✅ Entregando $${monto2}. Saldo restante: $${saldo - monto2}`
      : "❌ El monto debe ser múltiplo de 10";
  } else {
    resultado2 = "❌ Saldo insuficiente";
  }
} else {
  resultado2 = "❌ PIN incorrecto";
}
console.log(resultado2);

const edadC: number = 20;
const tieneLicencia: boolean = true;
const alcohol: number = 0.1;

if (edadC < 18) {
  console.log("No tiene edad");
} else {
  if (!tieneLicencia) {
    console.log("Le falta licencia");
  } else {
    if (alcohol > 0.3) {
      console.log("No puede: alcohol");
    } else {
      console.log("Puede conducir");
    }
  }
}

const esMenor = edadC < 18;
const noTieneLicencia = !tieneLicencia;
const alcoholAlto = alcohol > 0.3;

if (esMenor) {
  console.log("No tiene edad");
} else if (noTieneLicencia) {
  console.log("Le falta licencia");
} else if (alcoholAlto) {
  console.log("No puede: alcohol");
} else {
  console.log("Puede conducir");
}
