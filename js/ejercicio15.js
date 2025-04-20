/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

do {
  const frase = prompt("Ingrese frase de máximo 5 caracteres, en minúscula:");
  let resultado = "";

  if (frase.length >= 1 && frase.length <= 5) {
    if (
      frase.charAt(0) === "a" ||
      frase.charAt(0) === "e" ||
      frase.charAt(0) === "i" ||
      frase.charAt(0) === "o" ||
      frase.charAt(0) === "u"
    ) {
      resultado += frase.charAt(0);
    }
    if (
      frase.length >= 2 &&
      (frase.charAt(1) === "a" ||
        frase.charAt(1) === "e" ||
        frase.charAt(1) === "i" ||
        frase.charAt(1) === "o" ||
        frase.charAt(1) === "u")
    ) {
      resultado += frase.charAt(1);
    }
    if (
      frase.length >= 3 &&
      (frase.charAt(2) === "a" ||
        frase.charAt(2) === "e" ||
        frase.charAt(2) === "i" ||
        frase.charAt(2) === "o" ||
        frase.charAt(2) === "u")
    ) {
      resultado += frase.charAt(2);
    }
    if (
      frase.length >= 4 &&
      (frase.charAt(3) === "a" ||
        frase.charAt(3) === "e" ||
        frase.charAt(3) === "i" ||
        frase.charAt(3) === "o" ||
        frase.charAt(3) === "u")
    ) {
      resultado += frase.charAt(3);
    }
    if (
      frase.length === 5 &&
      (frase.charAt(4) === "a" ||
        frase.charAt(4) === "e" ||
        frase.charAt(4) === "i" ||
        frase.charAt(4) === "o" ||
        frase.charAt(4) === "u")
    ) {
      resultado += frase.charAt(4);
    }

    alert(`Cantidad de volcales: ${resultado.length} Volcales: ${resultado}`);
  } else {
    alert("La frase debe tener entre 1 y 5 caracteres y estar en minúscula.");
  }
} while (confirm("¿Desea ingresar otra frase?"));
