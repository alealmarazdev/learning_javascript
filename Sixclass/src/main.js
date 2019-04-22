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

var koders_array = [{
        'nombre': 'David',
        'edad': 22,
        'genero': 'M',
        'hobbies': [
            'Fotografia',
            'Viajar'
        ],
        getNameHobbie: function () {
            return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
        },
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
        getNameHobbie: function () {
            return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
        },

    },
    {
        'nombre': 'Erick',
        'edad': 25,
        'genero': 'M',
        'hobbies': [
            'Caligrafia',
            'Videojuegos'
        ],
        getNameHobbie: function () {
            return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
        },
    },
    {
        'nombre': 'Diana',
        'edad': 27,
        'genero': 'F',
        'hobbies': [
            'Hardware',
            'Videojuegos'
        ],
        getNameHobbie: function () {
            return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
        },
    },
    {
        'nombre': 'Rodo',
        'edad': 32,
        'genero': 'M',
        'hobbies': [
            'Musica',
            'Programacion'
        ],
        getNameHobbie: function () {
            return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
        },
    }
];
koders_array.forEach(function (element) {
    console.log(element.getNameHobbie())
})

// una funcion contructura de objeto es una funcion que constuye un objeto de un tipo las funciones se ponen con mayusculas
// function Car (color, brand, modelo, año) {
//     this.color = color,
//     this.brand = brand,
//     this.modelo = modelo,
//     this.año = año,        
// }

var koders_array = [{
    'nombre': 'David',
    'edad': 22,
    'genero': 'M',
    'hobbies': [
        'Fotografia',
        'Viajar'
    ],
    getNameHobbie: function () {
        return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
    },
}]

function Koders(nombre, edad, genero, hobbies) {
    this.nombre = nombre,
    this.edad = edad,
    this.genero = genero,
    this.hobbies = hobbies  
}

getNameHobbie: function () {
    return 'Yo soy' + ' ' + this.nombre + ' y mis hobbies son ' + this.hobbies.join(', ')
},

var all_koders = [new Koders('David', '22', 'M', ['Fotografia', 'viajar'], ), new Koders('Jorge', '23', 'M', ['Videojuegos', 'Lectura', 'Dibujar']), new Koders ('Erick', '25', 'M', ['Caligrafia', 'Videojuegos'])]

koders_array.forEach(function (element) {
    console.log(element.getNameHobbie())
})
console.log(all_koders[0])