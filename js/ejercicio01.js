/*
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.
*/
do{
    const edad = parseInt(prompt("Ingrese edad"));
    if(edad >= 18 && edad <=70){
        document.writeln("Puede conducir");
    }else {
        document.writeln("No puede conducir");
    }
    if(edad >70){
        document.writeln("numero ingresado no valido");
    }
}while(confirm("¿Deseas realizar otra operación?"))

