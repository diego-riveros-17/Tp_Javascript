const estudiante = {
  nombre: "Diego",
  apellido: "Riveros",
  nota: 4,
};

estudiante.nota >= 6
  ? console.log(
      `${estudiante.nombre} ${estudiante.apellido} nota ${estudiante.nota} Aprobado`,
    )
  : console.log(
      `${estudiante.nombre} ${estudiante.apellido} nota ${estudiante.nota} Desaprobado`,
    );
