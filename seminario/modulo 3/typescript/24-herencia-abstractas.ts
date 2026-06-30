// Parte C.1 · Herencia: extends, super() y sobrescritura de métodos
class Animal {
  constructor(public nombre: string) {}

  hablar(): string {
    return `${this.nombre} hace un sonido.`;
  }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) {
    super(nombre);
  }

  override hablar(): string {
    return `${this.nombre} ladra: ¡Guau!`;
  }

  buscar(objeto: string): string {
    return `${this.nombre} busca el ${objeto}.`;
  }
}

const a = new Animal("Criatura");
const d = new Perro("Rex", "Labrador");

console.log(a.hablar());       // Criatura hace un sonido.
console.log(d.hablar());       // Rex ladra: ¡Guau!
console.log(d.buscar("palo")); // Rex busca el palo.
console.log(d.raza);           // Labrador

class Empleado {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class Gerente extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Vendedor extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private ventasMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

const emp = new Empleado("Carlos", 2000);
const ger = new Gerente("Laura", 3000, 1500);
const vend = new Vendedor("Pedro", 1500, 50, 30);

console.log(emp.infoLaboral());  // Carlos — Salario: $2000
console.log(ger.infoLaboral());  // Laura — Salario: $4500
console.log(vend.infoLaboral()); // Pedro — Salario: $3000

// Mini-ejercicio: Vehiculo, Automovil y Motocicleta
class Vehiculo {
  constructor(public marca: string, public velocidadMax: number) {}

  describir(): string {
    return `Vehículo ${this.marca} con velocidad máxima ${this.velocidadMax} km/h.`;
  }
}

class Automovil extends Vehiculo {
  constructor(marca: string, velocidadMax: number, public numeroPuertas: number) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    return `Auto ${this.marca} (${this.numeroPuertas} puertas) — velocidad máxima ${this.velocidadMax} km/h.`;
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca: string, velocidadMax: number, public tieneSidecar: boolean) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    const sidecar = this.tieneSidecar ? "con sidecar" : "sin sidecar";
    return `Moto ${this.marca} ${sidecar} — velocidad máxima ${this.velocidadMax} km/h.`;
  }
}

const auto = new Automovil("Toyota", 220, 4);
const moto = new Motocicleta("Harley-Davidson", 180, false);

console.log(auto.describir());
console.log(moto.describir());

// Parte C.2 · Clases abstractas y métodos abstractos
abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;

  describir(): string {
    return `Área: ${this.area().toFixed(2)} | Perímetro: ${this.perimetro().toFixed(2)}`;
  }
}

class Circulo2 extends Figura {
  constructor(private radio: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.radio ** 2;
  }

  override perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo2 extends Figura {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  override area(): number {
    return this.ancho * this.alto;
  }

  override perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

const circulo = new Circulo2(5);
const rect = new Rectangulo2(4, 6);

console.log(circulo.describir()); // Área: 78.54 | Perímetro: 31.42
console.log(rect.describir());    // Área: 24.00 | Perímetro: 20.00

abstract class MetodoPago {
  constructor(protected titular: string) {}

  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado: datos inválidos.`;
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(
    titular: string,
    private ultimos4: string,
    private saldoDisponible: number
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.ultimos4.length === 4 && this.saldoDisponible > 0;
  }

  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes en tarjeta.";
    this.saldoDisponible -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Saldo restante: $${this.saldoDisponible}`;
  }
}

class TransferenciaBancaria extends MetodoPago {
  constructor(
    titular: string,
    private clabe: string
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.clabe.length === 18;
  }

  override procesar(monto: number): string {
    return `Transferencia de $${monto} para ${this.titular} a CLABE ${this.clabe.slice(-4).padStart(18, "*")}.`;
  }
}

const tarjeta = new TarjetaCredito("Ana", "4321", 500);
const transferencia = new TransferenciaBancaria("Luis", "123456789012345678");

console.log(tarjeta.resumen(200));
console.log(transferencia.resumen(1000));

// Mini-ejercicio abstracto: ExportadorCSV y ExportadorJSON
abstract class Exportador {
  abstract exportar(datos: string[]): string;

  encabezado(): string {
    return "=== Exportación ===";
  }
}

class ExportadorCSV extends Exportador {
  override exportar(datos: string[]): string {
    return `${this.encabezado()}\n${datos.join(",")}`;
  }
}

class ExportadorJSON extends Exportador {
  override exportar(datos: string[]): string {
    return `${this.encabezado()}\n${JSON.stringify(datos)}`;
  }
}

const datos = ["uno", "dos", "tres"];
const csv = new ExportadorCSV();
const json = new ExportadorJSON();

console.log(csv.exportar(datos));
console.log(json.exportar(datos));
