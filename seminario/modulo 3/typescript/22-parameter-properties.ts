// Parte A.2 · Atajo de parámetros del constructor
class PuntoLargo {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Punto {
  constructor(public x: number, public y: number) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const p = new Punto(3, 4);
console.log(p.x);                    // 3
console.log(p.distanciaAlOrigen());  // 5

// Ejemplo aplicado — clase Usuario con parameter properties
class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public rol: "admin" | "editor" | "lector"
  ) {}

  saludo(): string {
    return `Hola, ${this.nombre}. Tienes rol "${this.rol}".`;
  }
}

const ana = new Usuario("Ana", "ana@ejemplo.com", "admin");
const luis = new Usuario("Luis", "luis@ejemplo.com", "lector");

console.log(ana.saludo());  // Hola, Ana. Tienes rol "admin".
console.log(luis.email);    // luis@ejemplo.com

// Mini-ejercicio: clase Libro con parameter properties y método resumen
class Libro {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number
  ) {}

  resumen(): string {
    return `'${this.titulo}' de ${this.autor} (${this.paginas} páginas)`;
  }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);

console.log(libro1.resumen());
console.log(libro2.resumen());
