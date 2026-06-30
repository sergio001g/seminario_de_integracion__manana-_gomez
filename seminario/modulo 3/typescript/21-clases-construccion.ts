// Parte A.1 · Clase básica: propiedades tipadas, constructor e instanciación
class Producto {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const teclado = new Producto("Teclado mecánico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir()); // Teclado mecánico — $120 (disponible)
console.log(monitor.describir()); // Monitor 4K — $450 (agotado)

// Ejemplo aplicado — clase Temperatura
class Temperatura {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return `${this.valorCelsius}°C = ${this.aFahrenheit()}°F = ${this.aKelvin()}K`;
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K

// Mini-ejercicio: clase Rectangulo
class Rectangulo {
  constructor(public ancho: number, public alto: number) {}

  area(): number {
    return this.ancho * this.alto;
  }

  perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

const rect1 = new Rectangulo(3, 5);
const rect2 = new Rectangulo(10, 2);

console.log(`Rectángulo 1: área=${rect1.area()}, perímetro=${rect1.perimetro()}`);
console.log(`Rectángulo 2: área=${rect2.area()}, perímetro=${rect2.perimetro()}`);
