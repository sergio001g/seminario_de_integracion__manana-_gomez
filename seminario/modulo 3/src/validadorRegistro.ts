function validarRegistro(
  nombre: string,
  email: string,
  edad: number,
  password: string
): { ok: boolean; mensaje: string } {
  if (nombre.length < 2) {
    return { ok: false, mensaje: "Nombre demasiado corto" };
  }
  if (!email.includes("@")) {
    return { ok: false, mensaje: "Email inválido" };
  }
  if (edad < 18) {
    return { ok: false, mensaje: "Debes ser mayor de edad" };
  }
  if (password.length < 8) {
    return { ok: false, mensaje: "Contraseña debe tener mínimo 8 caracteres" };
  }
  return { ok: true, mensaje: `✅ Registro exitoso: bienvenido, ${nombre}` };
}

// Pruebas
console.log(validarRegistro("A", "a@a.com", 20, "12345678"));
console.log(validarRegistro("Ana", "ana.com", 20, "12345678"));
console.log(validarRegistro("Ana", "ana@ana.com", 17, "12345678"));
console.log(validarRegistro("Ana", "ana@ana.com", 20, "1234567"));
console.log(validarRegistro("Ana", "ana@ana.com", 20, "12345678"));
