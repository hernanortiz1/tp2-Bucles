/*
Realiza un script que genere un número aleatorio entre 1 y 99
*/

do{
    let resultado = (Math.random()*99) +1;
    document.writeln();
    console.log(parseInt(resultado));
}while(confirm("¿Generar otro número?"))