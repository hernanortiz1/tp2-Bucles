/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal
*/

for (let i = 1; i <= 500; i++) {
  if (i % 4 == 0 && i % 9 == 0) {
    document.writeln(`<p>${i} múltiplo de 4 y 9</p>`);
  } else if (i % 4 == 0) {
    document.writeln(`<p>${i} múltiplo de 4</p>`);
  } else if (i % 9 == 0) {
    document.writeln(`<p>${i} múltiplo de 9</p>`);
  } else {
    document.writeln(`<p>${i}</p>`);
  }
  if (i % 5 == 0) {
    document.writeln("------------------------------------------");
  }
}
