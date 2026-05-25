const estudiante = {
  nombre: "Diego",
  apellido: "Riveros",
  nota: 4,
};

if (estudiante.nota >= 6) {
  console.log(
    `Estudiante ${estudiante.nombre} ${estudiante.apellido}, nota ${estudiante.nota} Aprobado`,
  );
} else {
  console.log(
    `Estudiante ${estudiante.nombre} ${estudiante.apellido}, nota ${estudiante.nota} Desaprobado`,
  );
}
