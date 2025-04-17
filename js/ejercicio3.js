/*
 Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
*/

do {
    const opcion = prompt("Ingrese frases");
    document.writeln(`${opcion} -`);
  } while (confirm("¿Deseas ingresar otra frase?"));