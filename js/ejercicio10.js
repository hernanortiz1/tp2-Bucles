/*
- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

do {
  const fila = prompt("Ingrese número de filas");
  const columna = prompt("Ingrese número de columnas");

  if (fila !== null && columna !== null && !isNaN(fila) && !isNaN(columna)) {
    const numFila = parseInt(fila);
    const numColumna = parseInt(columna);
    const totalCeldas = numFila * numColumna;

    let contador = totalCeldas;

    document.writeln("<table border='1' cellspacing='0' cellpadding='5'>");

    for (let i = 0; i < numFila; i++) {
      document.writeln("<tr>");
      for (let j = 0; j < numColumna; j++) {
        document.writeln(`<td>${contador}</td>`);
        contador--;
      }
      document.writeln("</tr>");
    }

    document.writeln("</table> <br>");
  } else {
    alert("Entrada no válida. Debe ingresar números.");
  }
} while (confirm("¿Desea ingresar más datos?"));
