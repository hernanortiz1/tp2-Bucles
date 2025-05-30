/*
Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/

let entrada;
do {
  entrada = prompt("Ingrese DNI (0 a 99999999)");

  if (entrada === null || isNaN(entrada)) {
    alert("Fin del programa. Entrada no valida");
    break;
  }

  const numero = parseInt(entrada);

  if (!isNaN(numero) || numero < 0 || numero > 99999999) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = numero % 23;
    console.log(resto);
    const letra = letras.charAt(resto);
    alert(`DNI: ${numero} - Letra: ${letra}`);
  } else {
    document.writeln("entrada no valida, no es numero");
  }
} while (true);
