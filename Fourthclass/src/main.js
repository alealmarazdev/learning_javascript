console.log('Hello word form script src tag')

// rutas absoluta y rutas relativa
// dos funciones que va a recibir un parametro, primera funcion va a transformar de dolarea  a pesos y
// la segunda funcion va a transformar de psos de gasolina


//primera forma
// function convert(dolares) {
//     var resultado = 18.75 * dolares
//     return resultado
// }

// console.log(convert(2))

//segunda forma
// function convierteADolares (dolares) {
//     return resultadoConversionDollar = 18.75 * dolares;
// function (resultadoConversionDollar ) {
//     return resultadoFinal =  resultadoConversionDollar / 19.37 
//  }}

// console.log(convierteADolares(10))
// //primera forma
// function gasolina(pesos) {
//     var result =  pesos/ 19.37
//     return  result
//  }

// console.log(gasolina(1937))
 

// //segunda forma
// function gasolina(pesos) {
//     return result =  pesos/ 19.37
//  }

//  console.log(gasolina(1937))
function toMXN(USD) {
    return toGasolineLters(USD *18.88)
}

function toGasolineLters(MXN) {
    return MXN/19.37
}

console.log(toMXN(9393))







//input ->30920
//output->02903


// var numeroVolteado= "30920";
// var auxiliarCont = 0;

// var arrNumeroVolteado =numeroVolteado.split("");
// var reverseNumeroVolteado = "";




// for(var i = arrNumeroVolteado.length-1; i >= 0; i--){
//    reverseNumeroVolteado += numeroVolteado[i];
//  if(numeroVolteado.replace(/ /gi, '') === numeroVolteado.replace(/ /gi, '')){
  
//  }
// }
// console.log(numeroVolteado);  
// var auxiliarCont = 0;
// var reverseNumeroVolteado = '';

// var numeroVolteado = "30920";
// var arrNumeroVolteado = numeroVolteado.split('');

// for (var i = arrNumeroVolteado.length - 1; i >= 0; i--){
//     reverseNumeroVolteado += numeroVolteado[i]
// }

var numeroVolteado = "30920";
var arrNumeroVolteado = numeroVolteado.split('');
console.log(arrNumeroVolteado);
var reverse = arrNumeroVolteado.reverse();
console.log(reverse);
var unir = reverse.join('');
console.log(unir);

// input 'holi a todos'
// output 'Holi A Todos'arrOracionACapitalizar[0].toUpperCase() 

var oracionACapitalizar = 'holi a todos'
var arrOracionACapitalizar = oracionACapitalizar.split('')
console.log(arrOracionACapitalizar)
var intentoOne = arrOracionACapitalizar
console.log(intentoOne)