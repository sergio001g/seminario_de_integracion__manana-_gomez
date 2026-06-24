const NOMBRE_SERVIDOR = "web-prod-01";
const PUERTO_DEFAULT = 443;
const ES_PRODUCCION = true;

let solicitudesAtendidas: number = 0;
let ultimoError: string | null = null;

function registrarSolicitud(ruta: string, codigoHttp: number): void {
  solicitudesAtendidas++;
  console.log(`[${NOMBRE_SERVIDOR}] ${codigoHttp} ${ruta} — total: ${solicitudesAtendidas}`);
}

registrarSolicitud("/api/usuarios", 200);
registrarSolicitud("/api/productos", 404);
