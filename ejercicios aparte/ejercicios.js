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
/* David (Coordinador y mentor) [22:40]
Hahaha vale

Déjame pensarlos y los mando
Input -> Array
Output -> Array

Determinar las palabras que tienen más de 3 vocales dentro de un Array de n elementos, si el Array contiene un número, arrojar un error

Alejandra Almaraz [12:24]
Sí tiene más de tres elementos que debe hacer?

David (Coordinador y mentor) [12:24]
haha vas a filtrar las palabras que tienen mas de 3 vocales

Alejandra Almaraz [12:25]
Okay, como ayer con los pares?

David (Coordinador y mentor) [12:27]
yep
cuando termines ese me avisas :sonrisa:

Alejandra Almaraz [12:36]
:s sí */

var some_array = ['pan', 'ven', 'hub', 'ala']
var palabra= ''
for (var i = 0; i < some_array.length; i++){
    palabra = palabra + some_array[i] + ' '

}
console.log(palabra);

var separando_palabra = palabra.forEach(element => {
      console.log (element)
});
    // if (palabra.length === 3) {
    //     console.log('igual a tres')
    // } else {
    //     console.log(' no es tres')
    // }

// var contador_letras = palabra.indexOf('ven')
// console.log(contador_letras)


// var new_some_array = some_array.toString()
// console.log(some_array)
// console.log(new_some_array)
// var separar_array = new_some_array.split('');
// console.log(separar_array)
// var index_array = separar_array.length
// console.log(index_array)


//dada cualquier cantidad retorno el precio por ejemeploo 10000  retorne $10,000.00, imprime 10 diez pesos, tienen tres contenedores n de 1 no de 3 litro uno de 7 y n de refresco 