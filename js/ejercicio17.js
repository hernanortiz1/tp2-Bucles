/*
- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
*/

do {
  const frase = prompt("Ingrese frase de máximo 5 caracteres, en minúscula:");
  let posicion = -1;

  if (frase !== null && frase.length >= 1 && frase.length <= 5) {
    for (let i = 0; i < frase.length; i++) {
      const letra = frase.charAt(i);
      if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
      ) {
        posicion = i;
        break;
      }
    }

    if (posicion !== -1) {
      document.writeln(
        `<p>Primera vocal: '${frase[posicion]}' en la posición ${posicion}</p>`
      );
    } else {
      document.writeln("<p>No se encontró ninguna vocal.</p>");
    }
  } else {
    alert("La frase debe tener entre 1 y 5 caracteres y estar en minúscula.");
  }
} while (confirm("¿Desea ingresar otra frase?"));
