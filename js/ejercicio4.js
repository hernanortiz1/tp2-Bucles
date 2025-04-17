/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.
*/

let entrada;
let suma=0;
do {
  entrada = prompt("Ingrese un numero (o presione Cancelar para salir)");

  if (entrada === null || isNaN(entrada) ) {
    alert("Fin del programa. Entrada no valida. La suma total es: " + suma);
    break;
  }

  const numero = parseInt(entrada);

  if (!isNaN(numero)) {
        suma += numero;
  } else {
    document.writeln("entrada no valida, no es numero");
  }
}while (true)