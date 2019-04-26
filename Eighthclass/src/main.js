 /* while es un ciclo se VideoTracka repetir mientras una condicion se cumpla se escribe de la siguiente manera: while(){} adentro de las llaves se ejecuta, en los parentesis una comparacion y returna un booleano por ejemplo 1==='1' false,  */
/*
var x=1,
while (x<=100){
    console.log(x)
}

/*esto hace un bucle se ejecuta siempre x */
 /*
var x=1,
while (x<=100){
    console.log(x)
    x = x ++
}
/* 
contador va despues porque sino no se imprime el 1 porque */
// el iteradoe es el elemento en si en for in eficiencia es menor es mas fcil manipular arrays r con for each

/* Operador ternario para comparaciones, no se puede poner un else if , no necesita return */

/* var x=2;
var y= '2';

var result =(x===y)?'si son iguales': 'No son iguales'
 */

/* return  regresa lo que se pide pero no se retorna nada, el return solo retorna */
/* 
function greeting(){
    console.log('hola');
    
}

function returnGreeting() {
    return 'Hola'  
}

function calculadora( first_number, second_number, operador) {
        if (operador == 'suma'){
            result = suma()
        }else if (operador == 'resta'){
            result = suma()
        }

} */

/* foto pasarlo */
/* acceso a objetos */



/* funcion constructora */ 

/*  */

var cars_array = [
    [
        'kia', 'manual', 'optima', '2019', '160,000'
    ],
    [
        'Honda', 'manual', 'xxr', '2019', '560,000'
    ],
    [
        'Renault', 'automatica', 'duster', '2019', '360,000'
    ],
]

console.log( cars_array[0][3] + ' ' + cars_array[0][1]+ ' '+ cars_array[0][2])
console.log( cars_array[1][3] + ' ' + cars_array[1][1]+ ' '+ cars_array[1][2])
console.log( cars_array[2][3] + ' ' + cars_array[2][1]+ ' '+ cars_array[2][2])
    /* funcion constructura iteren e instancien */


function Car (marca, transmicion, modelo, año, precio) {
    this.marca = marca
    this.transmicion = transmicion
    this.modelo= modelo
    this.año= año
    this.precio = precio
    this.getPrecio= function (){
        return this.precio 
        }
    this.getTransmision= function (){
        return this.transmicion
        }
    this.getModelo= function (){
        return this.modelo + ' ' + this.marca + ' ' + this.año
        }
    this.getAll = function(){
        return 'El precio es $' + this.getPrecio() + ' con el tipo de transmision ' + this.getTransmision() + ' del modelo que es ' + this.getModelo()
    }
        
}

var car = new Car (cars_array[0][0], cars_array [0][1], cars_array[0][2], cars_array [0][3],  cars_array [0][4] )
    console.log(car.getPrecio());
    console.log(car.getTransmision());
    console.log(car.getModelo());
    
 cars_array.forEach(function (element) {
    var new_car= new Car (element[0], element[1], element[2], element[3], element[4]);
    console.log(new_car.getAll())
})

//dada cualquier cantidad retorno el precio por ejemeploo 10000  retorne $10,000.00, imprime 10 diez pesos, tienen tres contenedores n de 1 no de 3 litro uno de 7 y n de refresco  