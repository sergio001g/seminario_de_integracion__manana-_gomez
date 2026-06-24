function formatearNombre(nombre: string, apellido: string): string {
  const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  const apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
  return `${nombreFormateado} ${apellidoFormateado}`;
}

console.log(formatearNombre("ANA", "LOPEZ"));
console.log(formatearNombre("juan", "perez"));
