// Página 3 · Parte A.2: if / else — dos caminos

const edad2: number = 16;
if (edad2 >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

const estado: string = edad2 >= 18 ? "Mayor" : "Menor";
console.log(estado);

const password: string = "abc";
let mensajePassword: string;
if (password.length >= 8) {
  mensajePassword = "✅ Contraseña válida";
} else {
  mensajePassword = "❌ Mínimo 8 caracteres";
}
console.log(mensajePassword);

const password2: string = "superclave";
const mensajePassword2: string = password2.length >= 8 ? "✅ válida" : "❌ corta";
console.log(mensajePassword2);

const n: number = 7;
if (n % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}

const paridad: string = n % 2 === 0 ? "par" : "impar";
console.log(paridad);
