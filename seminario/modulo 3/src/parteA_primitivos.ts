// A.1 - number
const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log(hexadecimal);
console.log(binario);
console.log(grande);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(1 / 0));
console.log(Number.isNaN(0 / 0));

// Calculadora de descuento
function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  const precioFinal = precio - descuento;
  return Number(precioFinal.toFixed(2));
}

console.log(calcularDescuento(199.99, 15));
console.log(calcularDescuento(50, 10));
console.log(calcularDescuento(1299, 20));

// A.2 - string
const simple: string = "Hola TypeScript";
const doble: string = 'También funciona';
const template: string = `Hola ${"mundo"}`;

const nombre: string = "Ana";
const edad: number = 28;
const saludo: string = `Hola, ${nombre}. Tienes ${edad} años.`;
const mayoria: string = `Eres ${edad >= 18 ? "mayor" : "menor"} de edad.`;

const mensaje: string = `
  Línea 1
  Línea 2
  Línea 3
`.trim();

console.log("  hola  ".trim());
console.log("hola".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: fallo".includes("error"));
console.log("archivo.ts".endsWith(".ts"));

// Generador de slugs
function generarSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .trim()
    .replace(/[áéíóú]/g, (c) => ({ á:"a", é:"e", í:"i", ó:"o", ú:"u" }[c] ?? c))
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

console.log(generarSlug("Introducción a TypeScript"));
console.log(generarSlug("  Hola Mundo  "));
console.log(generarSlug("10 Trucos para Node.js"));

// A.3 - boolean
const activo: boolean = true;
const eliminado: boolean = false;
const esMayor = 25 >= 18;
const tieneStock = 0 > 0;

if (!tieneStock) {
  console.log("Sin stock disponible");
}

// Validador de formulario de registro
function validarRegistroA(
  email: string,
  password: string,
  aceptaTerminos: boolean
): string {
  const emailValido: boolean = email.includes("@") && email.includes(".");
  const passSegura: boolean = password.length >= 8;

  if (!aceptaTerminos) return "Debes aceptar los términos";
  if (!emailValido) return "Email no válido";
  if (!passSegura) return "La contraseña debe tener al menos 8 caracteres";
  return "Registro exitoso";
}

console.log(validarRegistroA("ana@mail.com", "secret123", true));
console.log(validarRegistroA("ana@mail.com", "abc", true));
console.log(validarRegistroA("ana@mail.com", "secret123", false));

// A.4 - null y undefined
let sinAsignar: undefined = undefined;
let sinValor: null = null;

function buscarUsuario(id: number): string | null {
  if (id === 1) return "Ana";
  return null;
}

const usuario = buscarUsuario(5);
const nombreUsuario = usuario ?? "Invitado";
console.log(nombreUsuario);
const longitud = usuario?.length;
console.log(longitud);
