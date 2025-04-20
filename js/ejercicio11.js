/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
*/
do {
const edad1 = prompt("Ingrese edad de primera persona");
const edad2 = prompt("Ingrese edad de segunda persona");
const edad3 = prompt("Ingrese edad de tercera persona");
const nombre1 = prompt("Ingrese nombre de primera persona");
const nombre2 = prompt("Ingrese nombre de segunda persona");
const nombre3 = prompt("Ingrese nombre de tercera persona");

  if (
    edad1 !== null &&
    edad2 !== null &&
    edad3 !== null &&
    nombre1 !== null &&
    nombre2 !== null &&
    nombre3 !== null &&
    !isNaN(edad1) &&
    !isNaN(edad2) &&
    !isNaN(edad3) &&
    nombre1 !== null &&
    nombre2 !== null &&
    nombre2 !== null &&
    isNaN(nombre1) &&
    isNaN(nombre2) &&
    isNaN(nombre3)
  ) {
    const numEdad1 = parseInt(edad1);
    const numEdad2 = parseInt(edad2);
    const numEdad3 = parseInt(edad3);

    let resultado = Math.max(numEdad1, numEdad2, numEdad3);

    if (resultado === numEdad1) {
      document.writeln(`<p>Edad: ${numEdad1} Nombre ${nombre1}</p>`);
    } else if (resultado === numEdad2) {
      document.writeln(`<p>Edad: ${numEdad2} Nombre ${nombre2}</p>`);
    } else if (resultado === numEdad3) {
      document.writeln(`<p>Edad: ${numEdad3} Nombre ${nombre3}</p>`);
    }
  }
} while (confirm("¿Deseas ingresar más datos?"));
