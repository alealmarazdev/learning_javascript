 /* while es un ciclo se  repetir mientras una condicion se cumpla se escribe de la siguiente manera: while(){} adentro de las llaves se ejecuta, en los parentesis una comparacion y returna un booleano por ejemplo 1==='1' false,  */
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

// Repaso de JS

// WHILE -> imprimir todos los nums de 1 al 100
var x=1

while (x<=100) {
    console.log(x);
    x++;
}

//forEach es una representación de forIn, el for-in es para cualquier tipo de elemento
var numbers_array = [1,2,3,4,5]
numbers_array.forEach(function(element){
    console.log(element);
})

for (element in numbers_array) {
    console.log(element);
}

//ternario == inline if
var x = 2
var y = '2'

var result = (x===y) ? 'sí son iguales' : 'no son iguales'
console.log(result);

// return -> The first function PRINT something on the screen, the second one gives you the data so you can manipulate it
function greeting () {
    console.log('Hello');
}

function returnGreeting (){
    return 'Hello'
} 

var salute = greeting() + 'Diana'
var salute2 = returnGreeting () + 'Diana'

//calculator (exercise 'return')
var a = parseInt(prompt('add a num'))
var b = parseInt(prompt('add another num'))
var operator = prompt('do you want the sum or the remains?')

function sum(a,b) {
    return a+b
}

function minus(a,b) {
    return a-b
}

function calculator (f_number, s_number, operator){
    var result;

    if (operator == 'sum') {
        result = sum(f_number,s_number)
    } else if (operator == 'minus') {
        result = minus(f_number, s_number)
    } else {console.log('No te lo manejo krnal!')}
    
    return result
} 

//Objets/arrays access
var numbers_array = [1,2,3,4,5]

numbers_array[4] //return 5

var obj = {
    'name':'Kodemia',
    'age':30
}

obj.name
obj['name']

obj.age
obj['age']

var test_array = [
    {
        'name':'Kodemia1',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
    },
    {
        'name':'Kodemia2',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
    },
    {
        'name':'Kodemia3',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
},
]

test_array[2]
test_array[2]['age']
test_array[2].age

test_array[2].hobbies[0]
test_array[2]['hobbies'][1]

//object creator function
//with array of objects
var persons_array = [
    {
    'name':'Kodemia',
    'age':30,
    },
]

function Person(name,age) {
    this.name = name
    this.age = age
    this.greeting = function() {
        return 'hello' + this.name
    }
}

var person = new Person(personObj.name,person.Obj.age)

//with array of arrays
var persons_array = [
   [ 
    'Kodemia',
    30,
   ],
]

persons_array.forEach(function(element,index){
    var person = new Person(element[0],element[1])
    console.log(Person.greeting());
})
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

 