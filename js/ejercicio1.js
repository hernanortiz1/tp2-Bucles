/*
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.
*/
do {
  const edad = parseInt(prompt("Ingrese edad"));
  console.log("Edad ingresada:", edad);

  if (!isNaN(edad) && edad > 0 && edad <= 100) {
    if (edad >= 18 && edad <= 70) {
      document.writeln("<p>Puede conducir</p>");
      console.log("Resultado: Puede conducir");
    } else {
      document.writeln("<p>No puede conducir</p>");
      console.log("Resultado: No puede conducir");
    }
  } else {
    document.writeln("<p>Número inválido</p>");
    console.log("Resultado: Número inválido");
  }
} while (confirm("¿Deseas realizar otra operación?"));
