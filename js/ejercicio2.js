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
do {
  const nota = parseInt(prompt("Ingrese nota"));

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    if (nota >= 0 && nota <= 2) {
      document.writeln("<p>Muy deficiente</p>");
      console.log("Muy deficiente");
    } else if (nota >= 3 && nota <= 4) {
      document.writeln("<p>Insuficiente</p>");
      console.log("Insuficiente");
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
    document.writeln("<p>Número inválido</p>");
    console.log("Resultado: Número inválido");
  }
} while (confirm("¿Deseas realizar otra operación?"));
