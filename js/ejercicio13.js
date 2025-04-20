/*
Realiza un script que pida un texto y lo muestre en mayúsculas
*/

do{
    const texto = prompt("ingrese frase");
    if(texto !== null && isNaN(texto)){
        document.writeln(`<p>Frase en mayuscula: ${texto.toUpperCase()}</p>`)
    }
}while(confirm("¿Ingresar otra frase?"))