/*
Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

let entrada;
do {
  entrada = prompt("Ingrese nota (o presione Cancelar para salir)");

  if (entrada === null) {
    document.writeln("Fin del programa");
    console.log("Fin del programa");
    break;
  }

  const nota = parseInt(entrada);
  document.writeln("Nota ingresada ", entrada);
  console.log("nota ingresada: ", nota);
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    if (nota >= 0 && nota <= 2) {
      document.writeln("<p>Muy deficiente</p>");
      console.log("Muy deficiente");
    } else if (nota >= 3 && nota <= 4) {
      document.writeln("<p>insuficiente</p>");
      console.log("insuficiente");
    } else if (nota >= 5 && nota <= 6) {
      document.writeln("<p>Suficiente</p>");
      console.log("Suficiente");
    } else if (nota === 7) {
      document.writeln("<p>Bien</p>");
      console.log("Bien");
    } else if (nota >= 8 && nota <= 9) {
      document.writeln("<p>Notable</p>");
      console.log("Notable");
    } else if (nota === 10) {
      document.writeln("<p>Sobresaliente</p>");
      console.log("Sobresaliente");
    }
  } else {
    document.writeln("Número fuera de rango");
    console.log("Número fuera de rango");
  }
}while (true)
