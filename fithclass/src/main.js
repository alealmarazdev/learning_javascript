var number_array = [1, 2, 3, 4, 5]
var new_number_array = number_array.map(function (element, index, array) {return element * 3
})

var even_array = new_number_array.filter(function (element, index, array) {
    return element %2 === 0
})

console.log(even_array)


var string_array = ['Hola', 'intento', 'sola', 'usando', 'filter']
var intento_string = string_array.filter(function (element, index, array) {
    return
}) 

// object

var koders_obj = {
    '0': 'Diana',
    '1': 'Carlos',
    '2': 'Emma',
    0: 'Ale',
    'one':'jorge'
}

koders_obj['1']
koders_obj[0]
koders_obj.one//°°°

var number = 10
var number_obj = {
    number:number
}

// el scope solo vive dentro de su padre
console.log(number_obj.number)


console.table(koders_obj)

// Object.keys(koders_obj) //arroja las llaves 

// Object.value(koders_obj) //arroja los valores

var personas = {
    nombre: 'Ale',
    nacionalidad: 'Mexicana',
    genero: 'mujer',
    raza: 'mestizo',
    cabello: 'ondulado',
    edad: 29,
    coeficiente: 'sobredotado',
    viva: true,
    altura: 'media',
    ocupacion: 'profesionista',
    altura: 165,

}

var koders_array = [
    {
      'nombre': 'David',
      'edad': 22,
      'genero': 'M',
      'hobbies': [
        'Fotografia',
        'Viajar'
      ]
    },
    {
      'nombre': 'Jorge',
      'edad': 23,
      'genero': 'M',
      'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
      ]
    },
    {
      'nombre': 'Erick',
      'edad': 25,
      'genero': 'M',
      'hobbies': [
        'Caligrafia',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Diana',
      'edad': 27,
      'genero': 'F',
      'hobbies': [
        'Hardware',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Rodo',
      'edad': 32,
      'genero': 'M',
      'hobbies': [
        'Musica',
        'Programacion'
      ]
    }
]
  
// 1.imprimir todos los nombre de los koders_array
// 2. una vez teniendo el 1 tambien obtener todos sus hobbies
// 3. filtrar a los koders que les gusten los videojuegos


// koders_obj['1']
// koders_obj[0]
// koders_obj.one//°°°

console.table(koders_array[0].nombre)

var name_objet = koders_array.map(function (element, index, array) {
    return element.nombre
}) 

console.log(name_objet)

var name_objet = koders_array.forEach(function (element, index, array) {
    console.log(element.nombre)
}) 


var hobbies_objet = koders_array.forEach(function (element, index, array) {
    console.log ('Hola soy ' + element.nombre + ' y mis hobbies son ' + element.hobbies)
}) 

var hobbies_obj = koders_array.forEach(function (element, index, array) {
    console.log(element.nombre)
    element.hobbies.forEach(function (element, index, array) {
        console.log(element)
    }) 
    // console.log('Hola soy ' + element.nombre + ' y mis hobbies son ' + element)
}) 



var hobbiess = koders_array.hobbies.filter(function (element, index, array) {
    var filter_elements=  element.hobbies.map(function (element) {
        console.log 
    })
}) 

