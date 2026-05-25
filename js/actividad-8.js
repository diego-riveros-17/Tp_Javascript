const notas = [6, 5, 4, 7, 8];
let acum_nota = 0,
  prom_nota = 0;

for (let i = 0; i < notas.length; i++) {
  acum_nota = acum_nota + notas[i];
}

prom_nota = acum_nota / notas.length;

console.log(`Promedio de notas ${prom_nota}`);
