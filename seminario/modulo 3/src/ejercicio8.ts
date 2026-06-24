type Alumno = {
  nombre: string;
  nota: number;
};

const alumnos: Alumno[] = [
  { nombre: "Ana", nota: 85 },
  { nombre: "Luis", nota: 55 },
  { nombre: "Marta", nota: 70 },
  { nombre: "Carlos", nota: 95 },
  { nombre: "Sofía", nota: 45 },
];

function resumenClase(alumnos: Alumno[]) {
  const aprobados = alumnos.filter((a) => a.nota >= 60);
  const reprobados = alumnos.filter((a) => a.nota < 60);
  const promedio = Number(
    (alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length).toFixed(1)
  );
  const notaMayor = alumnos.reduce((max, a) => (a.nota > max.nota ? a : max));
  return {
    aprobados,
    reprobados,
    promedio,
    alumnoNotaMayor: notaMayor.nombre
  };
}

console.log(resumenClase(alumnos));
