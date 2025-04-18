/*
Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
*/

const entrada = prompt("Ingrese un número (máximo 50)");

if (!entrada === null || !isNaN(entrada)) {
  const numero = parseInt(entrada);

  if (numero > 0 && numero <= 50) {
    for (let i = numero; i > 0; i--) {
      let numero = "";
      for (let j = 0; j < i; j++) {
        numero += i;
      }
      document.writeln(`<p>${numero}</p>`);
    }
  }else {
    alert("Fin del programa. Entrada no valida");
  }
} else {
  alert("Fin del programa. Entrada no valida");
}
