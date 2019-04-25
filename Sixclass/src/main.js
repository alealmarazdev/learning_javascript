// var car = {
//     color: 'rojo',
//     model: 'Rio',
// }
// // sintaxis

// for (key in car) {
//     console.log(car[key])
// }

var car_obj = {
    'color': {
        'galaxy': {
            'primaryColor': 'red',
            'secondaryColor': 'orange'
        }
    },
    'model': 'Rio'
}
// for (key in car_obj) {
//     for (key in car_obj.color.galaxy)
//         console.log(primaryColor[key])
//     for (key in car_obj.color.galaxy)
//         console.log(secondaryColor[key])
// }


for (property in car_obj) {
    if (property === 'color') {
        for (color_property in car_obj[property]) {
            if (color_property === 'galaxy') {
                for (galaxy_property in car_obj[property][color_property]) {
                    console.log(car_obj[property][color_property][galaxy_property])
                }
            }
        }
    }
}

var car_obj = {
    'color': 'red',
    'brand': 'kia',
    'model': 'Rio',
    getCar: function () {
        return this.brand + ' ' + this.model
    }
}
console.log(car_obj.getCar())
console.log('Hola te vendo un ' + car_obj.brand + ' ' + car_obj.model + ' color ' + car_obj.color);
// this da el alcance del nivel del padre, 
//instanciado y ajax y xhttp

// objeto persona con diferente propedad metodo que devuelva el nombre completo

var person = {
    'name': 'Ale',
    'middle': 'Rodriguez',
    'lastname': 'Almaraz',
    getName: function () {
        return 'Yo soy' + ' ' + this.name + ' ' + this.middle + ' ' + this.lastname
    }
}
console.log(person.getName())
//  con arreglo de objetos de ayer van ha hacer un metodo que funcione igual que el ejericio 2.1
//----------------------
var koders_array = [{
        'nombre': 'David',
        'edad': 22,
        'genero': 'M',
        'hobbies': [
            'Fotografia',
            'Viajar'
        ],
       
    },
    {
        'nombre': 'Jorge',
        'edad': 23,
        'genero': 'M',
        'hobbies': [
            'Videojuegos',
            'Lectura',
            'Dibujar'
        ],
       
    },
    {
        'nombre': 'Erick',
        'edad': 25,
        'genero': 'M',
        'hobbies': [
            'Caligrafia',
            'Videojuegos'
        ],
        
    },
    {
        'nombre': 'Diana',
        'edad': 27,
        'genero': 'F',
        'hobbies': [
            'Hardware',
            'Videojuegos'
        ],
       
    },
    {
        'nombre': 'Rodo',
        'edad': 32,
        'genero': 'M',
        'hobbies': [
            'Musica',
            'Programacion'
        ],
        
    }
];


/* koders_array[2]['nombre']
koders_array[2].nombre */
// una funcion contructura de objeto es una funcion que constuye un objeto de un tipo las funciones se ponen con mayusculas



function Koders(nombre, edad, genero, hobbies) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
    this.hobbies = hobbies
    this.getNameHobbie= function () {
        return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
    }
}



/* --------- con solo videojuego */


koders_array.forEach(function (element) {
    if (element.hobbies.includes('Videojuegos')){   
       var persona = new Koders(element.nombre,  element.edad, element.genero,  element.hobbies)
       console.log(persona.getNameHobbie()) 
    }  
})

/*  */

var new_koders_array_videojuegos = koders_array.filter(function (element) {
  return element.hobbies.includes('Videojuegos')
})


new_koders_array_videojuegos.forEach(function (element) {
   var persona = new Koders(element.nombre,  element.edad, element.genero,  element.hobbies)
   console.log(persona.getNameHobbie())
})
