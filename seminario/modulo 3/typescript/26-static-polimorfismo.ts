// Parte D.2 · Miembros estáticos (static)
class Matematica {
  static readonly PI: number = 3.14159265;

  static circunferencia(radio: number): number {
    return 2 * Matematica.PI * radio;
  }

  static potencia(base: number, exp: number): number {
    return base ** exp;
  }
}

console.log(Matematica.PI);                   // 3.14159265
console.log(Matematica.circunferencia(5));    // 31.4159265
console.log(Matematica.potencia(2, 10));      // 1024

class Conexion {
  private static totalConexiones: number = 0;
  private static readonly MAX_CONEXIONES: number = 5;

  public readonly idConexion: number;
  public readonly host: string;

  constructor(host: string) {
    if (Conexion.totalConexiones >= Conexion.MAX_CONEXIONES) {
      throw new Error(`Límite alcanzado: máximo ${Conexion.MAX_CONEXIONES} conexiones.`);
    }
    Conexion.totalConexiones++;
    this.idConexion = Conexion.totalConexiones;
    this.host = host;
  }

  static cuantasActivas(): number {
    return Conexion.totalConexiones;
  }

  static resetear(): void {
    Conexion.totalConexiones = 0;
  }

  cerrar(): void {
    Conexion.totalConexiones--;
    console.log(`Conexión #${this.idConexion} a "${this.host}" cerrada.`);
  }
}

const c1 = new Conexion("db.local");
const c2 = new Conexion("cache.local");
const c3 = new Conexion("api.local");

console.log(`Activas: ${Conexion.cuantasActivas()}`);
c2.cerrar();
console.log(`Activas: ${Conexion.cuantasActivas()}`);

// Mini-ejercicio: IdUnico con método estático
class IdUnico {
  private static ultimo: number = 0;

  static generar(): number {
    IdUnico.ultimo += 1;
    return IdUnico.ultimo;
  }
}

const ids = [
  IdUnico.generar(),
  IdUnico.generar(),
  IdUnico.generar(),
  IdUnico.generar(),
  IdUnico.generar(),
];

console.log(ids); // [1, 2, 3, 4, 5]

// Parte D.3 · Polimorfismo: tratar subclases por su tipo base
class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Círculo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triángulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3),
  new Triangulo(6, 4),
  new Cuadrado(5),
];

for (const f of formas) {
  console.log(`${f.nombre()}: área = ${f.area().toFixed(2)}`);
}

abstract class Notificacion {
  constructor(protected destinatario: string, protected mensaje: string) {}

  abstract enviar(): string;

  resumen(): string {
    return `[${this.constructor.name}] → ${this.destinatario}`;
  }
}

class NotificacionEmail extends Notificacion {
  constructor(destinatario: string, mensaje: string, private asunto: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `Email a <${this.destinatario}> | Asunto: "${this.asunto}" | Cuerpo: ${this.mensaje}`;
  }
}

class NotificacionSMS extends Notificacion {
  constructor(destinatario: string, mensaje: string, private telefono: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `SMS a ${this.telefono} (${this.destinatario}): ${this.mensaje}`;
  }
}

class NotificacionPush extends Notificacion {
  constructor(destinatario: string, mensaje: string, private dispositivoId: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `Push → dispositivo ${this.dispositivoId} (${this.destinatario}): ${this.mensaje}`;
  }
}

const notificaciones: Notificacion[] = [
  new NotificacionEmail("ana@mail.com", "Tu pedido llegó.", "Entrega completada"),
  new NotificacionSMS("Luis", "Tu cita es mañana.", "+52-555-0001"),
  new NotificacionPush("Carlos", "¡Oferta especial!", "dev-abc-123"),
];

function despacharTodas(lista: Notificacion[]): void {
  for (const n of lista) {
    console.log(n.resumen());
    console.log("  >", n.enviar());
  }
}

despacharTodas(notificaciones);

// Mini-ejercicio polimórfico: Descuento
abstract class Descuento {
  abstract aplicar(precio: number): number;

  etiqueta(precio: number): string {
    const precioFinal = this.aplicar(precio);
    return `$${precio.toFixed(2)} → $${precioFinal.toFixed(2)}`;
  }
}

class DescuentoPorcentaje extends Descuento {
  constructor(private porcentaje: number) { super(); }

  override aplicar(precio: number): number {
    return precio * (1 - this.porcentaje / 100);
  }
}

class DescuentoFijo extends Descuento {
  constructor(private cantidad: number) { super(); }

  override aplicar(precio: number): number {
    return Math.max(0, precio - this.cantidad);
  }
}

class SinDescuento extends Descuento {
  override aplicar(precio: number): number {
    return precio;
  }
}

const descuentos: Descuento[] = [
  new DescuentoPorcentaje(20),
  new DescuentoFijo(15),
  new SinDescuento(),
];

for (const d of descuentos) {
  console.log(d.etiqueta(100));
}

// Resumen de la página 6
console.log("\n=== Resumen Página 6 ===");
console.log("- Clase básica: propiedades, constructor y métodos.");
console.log("- Parameter properties: constructor(public x: number) declara y asigna.");
console.log("- Modificadores: public, private, protected, readonly.");
console.log("- Getters/setters: accesos con lógica y sintaxis natural.");
console.log("- Herencia: extends, super() y override.");
console.log("- Abstract: clase base con métodos abstractos obligatorios.");
console.log("- Interfaces: implements cumple contratos sin heredar implementación.");
console.log("- Static: miembros de clase, accesibles con NombreClase.miembro.");
console.log("- Polimorfismo: recorrer subclases por su tipo base y llamar métodos correctos.");