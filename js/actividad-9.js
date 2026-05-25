const estudiante = {
  nombre: "Diego Riveros",
  notas: [1, 4.55, 4.35, 5.5, 7.86],
  acum_nota: 0,
  prom_nota: 0,
  notaConceptual: "S/N",
};

for (let i = 0; i < estudiante.notas.length; i++) {
  estudiante.acum_nota = estudiante.acum_nota + estudiante.notas[i];
}

estudiante.prom_nota = (estudiante.acum_nota / estudiante.notas.length).toFixed(
  1,
);

if (estudiante.prom_nota > 7) {
  estudiante.notaConceptual = "Muy Bueno";
} else {
  if (estudiante.prom_nota >= 6) {
    estudiante.notaConceptual = "Aprobado";
  } else {
    estudiante.notaConceptual = "Desaprobado";
  }
}

console.log(
  `${estudiante.nombre} promedio ${estudiante.prom_nota} resultado ${estudiante.notaConceptual}`,
);
