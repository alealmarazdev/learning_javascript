//sacar el factorial de un numero
// factorial son lo snumero que se multiplican desde el 1 hasta llegar a ellos.
// multiplicar el numero por el numero menor siguiente y asi consecutivamente
//necestiamos el numero, su valor y que este valor vaya disminuyendo

// factorial son lo snumero que se multiplican desde el 1 hasta llegar a ellos.
// multiplicar el numero por el numero menor siguiente y asi consecutivamente
//necestiamos el numero, su valor y que este valor vaya aumentando
// 1 * 2 * 3 * 4 * 5
// 0   2   6   24  120
// toma el uno y lo multiplica por el numero siguiente hasta llegar al numero
// prompt
function factorial(numero) {
    var resultado= 1
    for (var i = 1; i <= numero; i++) 
        resultado = resultado * i
     return resultado;
}
console.log(factorial(5))


// --------------------------------
//     SEGUNDO EJERCICIO DE PRACTICA
// input -> Array
// output -> Array
// 1. Pasarlo a un string
// 2. separa cada palabra
// 3. contar cada palabra 
// 4. identificar si es un numero o palabra



