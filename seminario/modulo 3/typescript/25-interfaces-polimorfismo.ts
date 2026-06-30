// Parte D.1 · Implementar interfaces: class X implements Y
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Pedido implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, productos: this.productos, total: this.total });
  }

  esValido(): boolean {
    return this.productos.length > 0 && this.total > 0;
  }
}

const pedido = new Pedido("P-001", ["Mouse", "Teclado"], 150);
console.log(pedido.esValido());    // true
console.log(pedido.serializar());

interface RepositorioLectura<T> {
  buscarPorId(id: number): T | undefined;
  listarTodos(): T[];
}

interface RepositorioEscritura<T> {
  guardar(entidad: T): void;
  eliminar(id: number): boolean;
}

interface Repositorio<T> extends RepositorioLectura<T>, RepositorioEscritura<T> {}

interface UsuarioEntidad {
  id: number;
  nombre: string;
}

class RepositorioUsuarios implements Repositorio<UsuarioEntidad> {
  private datos: UsuarioEntidad[] = [];

  guardar(u: UsuarioEntidad): void {
    this.datos.push(u);
  }

  eliminar(id: number): boolean {
    const idx = this.datos.findIndex((u) => u.id === id);
    if (idx === -1) return false;
    this.datos.splice(idx, 1);
    return true;
  }

  buscarPorId(id: number): UsuarioEntidad | undefined {
    return this.datos.find((u) => u.id === id);
  }

  listarTodos(): UsuarioEntidad[] {
    return [...this.datos];
  }
}

const repo = new RepositorioUsuarios();
repo.guardar({ id: 1, nombre: "Ana" });
repo.guardar({ id: 2, nombre: "Luis" });
console.log(repo.buscarPorId(1));  // { id: 1, nombre: 'Ana' }
console.log(repo.listarTodos().length); // 2
repo.eliminar(1);
console.log(repo.listarTodos().length); // 1

// Mini-ejercicio: interfaz Imprimible con Factura y Recibo
interface Imprimible {
  imprimir(): void;
}

class Factura implements Imprimible {
  constructor(
    public numero: string,
    public cliente: string,
    public total: number
  ) {}

  imprimir(): void {
    console.log(`Factura #${this.numero}\nCliente: ${this.cliente}\nTotal: $${this.total.toFixed(2)}`);
  }
}

class Recibo implements Imprimible {
  constructor(
    public id: string,
    public descripcion: string,
    public monto: number
  ) {}

  imprimir(): void {
    console.log(`Recibo ${this.id}: ${this.descripcion} — Monto: $${this.monto.toFixed(2)}`);
  }
}

const factura = new Factura("F-001", "Empresa XYZ", 1200);
const recibo = new Recibo("R-001", "Pago de servicios", 320);

factura.imprimir();
recibo.imprimir();
