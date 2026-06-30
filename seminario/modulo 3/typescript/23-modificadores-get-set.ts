// Parte B.1 · Modificadores de acceso y propiedades especiales
class CuentaBancaria {
  readonly id: string;
  public titular: string;
  private saldo: number;
  protected moneda: string;

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "MXN";
  }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaBancaria("CC-001", "Ana García", 1000);
console.log(cuenta.titular);         // Ana García
console.log(cuenta.id);              // CC-001
console.log(cuenta.obtenerSaldo());  // 1000
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());  // 1500

class Configuracion {
  private readonly apiKey: string;
  private entorno: "desarrollo" | "produccion";
  public version: string;

  constructor(apiKey: string, entorno: "desarrollo" | "produccion") {
    this.apiKey = apiKey;
    this.entorno = entorno;
    this.version = "1.0.0";
  }

  esProduccion(): boolean {
    return this.entorno === "produccion";
  }

  keyResumida(): string {
    return `***${this.apiKey.slice(-4)}`;
  }
}

const cfg = new Configuracion("sk-ABCDE-12345", "produccion");
console.log(cfg.esProduccion()); // true
console.log(cfg.keyResumida());  // ***2345
console.log(cfg.version);        // 1.0.0

// Mini-ejercicio: clase Contador con propiedad private
class Contador {
  private valor: number = 0;

  incrementar(): void {
    this.valor += 1;
  }

  decrementar(): void {
    if (this.valor > 0) {
      this.valor -= 1;
    }
  }

  obtenerValor(): number {
    return this.valor;
  }
}

const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.decrementar();
console.log(contador.obtenerValor()); // 1
// contador.valor = 99; // Error: propiedad private

// Parte B.2 · Getters y setters con validación
class Circulo {
  private _radio: number;

  constructor(radio: number) {
    this._radio = radio;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const c = new Circulo(5);
console.log(c.radio);          // 5
console.log(c.area.toFixed(2)); // 78.54
c.radio = 10;
console.log(c.area.toFixed(2)); // 314.16

class Porcentaje {
  private _valor: number;

  constructor(valor: number) {
    this._valor = 0;
    this.valor = valor;
  }

  get valor(): number {
    return this._valor;
  }

  set valor(v: number) {
    if (v < 0 || v > 100) {
      throw new Error(`Porcentaje inválido: ${v}. Debe estar entre 0 y 100.`);
    }
    this._valor = v;
  }

  get complemento(): number {
    return 100 - this._valor;
  }

  toString(): string {
    return `${this._valor}% (complemento: ${this.complemento}%)`;
  }
}

const descuento = new Porcentaje(25);
console.log(descuento.toString()); // 25% (complemento: 75%)
descuento.valor = 40;
console.log(descuento.toString()); // 40% (complemento: 60%)

class Temperatura2 {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(v: number) {
    if (v < -273.15) {
      throw new Error("La temperatura no puede bajar de -273.15°C");
    }
    this._celsius = v;
  }

  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }

  set fahrenheit(f: number) {
    this._celsius = (f - 32) * 5 / 9;
  }
}

const temp = new Temperatura2(20);
console.log(temp.celsius);      // 20
console.log(temp.fahrenheit);   // 68

temp.fahrenheit = 32;
console.log(temp.celsius);      // 0
