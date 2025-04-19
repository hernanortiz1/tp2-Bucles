/*
 Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
do {
    const texto = prompt("ingrese frase");
    if (texto !== null && isNaN(texto)) {
        let resultado = "";
        for (let i = texto.length-1; i >= 0; i--) {
            resultado += texto[i];
        }
      document.writeln(`<p>Resultado: ${resultado}</p>`);
    }
  } while (confirm("¿Ingresar otra frase?"));