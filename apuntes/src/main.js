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



// var koders_array = ['Augus', 'Ale']

// koders_array.forEach(function(element, index) {
//   var koder = element + ' tiene el numero de lista: ' + String(index + 1)
//   console.log(koder);
// })

// nececistan el koders array de ayer
koders_array.forEach(function(element, index, array) {
    element.edad = element.edad + 1
   })


var number_array = [1,2,3,4,5]

var new_number_array = number_array.map(function(element) {
  if (element % 2 === 0) {
    return element * 2
  } else {
    return element
  }
})

var car_obj = {
    'color': {
      'galaxy': {
        'primaryColor': 'red',
        'secondaryColor': 'orange'
      }
    },
    'model': 'Rio',
  }


for(property in car_obj) {
  if (property === 'color') {
    for(color_property in car_obj[property]) {
      if( color_property === 'galaxy') {
		for(galaxy_property in car_obj[property][color_property]) {
			console.log(car_obj[property][color_property][galaxy_property])
		}
	  }
    }
  }
}

function Koder(nombre,hobbies){
    this.name = nombre;
    this.hobbies = hobbies;
    this.koder = function(){
        return this.name + " " + this.hobbies
    }
}

koders_array.forEach(function(element,index){
	var koder = new Koder(element.nombre,element.hobbies);
    console.log(koder.koder())
})

var persons_array = [
    {
      'nombre': 'Joel',
      'aPaterno': 'Guzman',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1996-02-11',
      'genero': 'hombre'
    },
    {
      'nombre': 'Martin',
      'aPaterno': 'Guzman',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1983-02-11',
      'genero': 'hombre'
    },
    {
      'nombre': 'Daniel',
      'aPaterno': 'Herrera',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1996-12-11',
      'genero': 'hombre'
    },
    {
      'nombre': 'Daniel',
      'aPaterno': 'Herrera',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1996-12-11',
      'genero': 'hombre'
    },
    {
      'nombre': 'Daniel',
      'aPaterno': 'Herrera',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1996-12-11',
      'genero': 'hombre'
    },
    {
      'nombre': 'Daniel',
      'aPaterno': 'Herrera',
      'aMaterno': 'Linares',
      'fechaNacimiento': '1996-12-11',
      'genero': 'hombre'
    }
  ]
  
  function Person(nombre, aPaterno, aMaterno, fechaNacimiento, genero) {
    this.nombre = nombre
    this.aPaterno = aPaterno
    this.aMaterno = aMaterno
    this.fechaNacimiento = fechaNacimiento
    this.genero = genero
    this.getShortName = function() {
      return (
        this.aPaterno.toUpperCase().slice(0,2) + 
        this.aMaterno.toUpperCase().charAt(0) +
        this.nombre.toUpperCase().charAt(0)
      )
    }
    this.getDate = function() {
      return (
        this.fechaNacimiento.slice(2,4) +
        this.fechaNacimiento.slice(5,7) +
        this.fechaNacimiento.slice(8)
      )
    }
    this.getGender = function() {
      return this.genero.toUpperCase().charAt(0)
    }
    this.getCURP = function() {
      return this.getShortName() + this.getDate() + this.getGender()
    }
  }



  var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "h2",
            "text": "Hello"
        },
        {
          "tag": "h2",
          "text": "World"
        },
        {
          "tag": "p",
          "text": "holi"
        },
        {
          "tag": "span",
          "text": "ontas?"
        }
    ]
  }
  
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag)
    var textElement = document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child)
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()



  var kodemia = {
    'tag':'div',
    'id': 'koders_wrapper',
    'koders':[
      {
        'tag':'div',
        'id': 1,
        'name':{
          'tag': 'p',
          'text':'David'
        },
        'age': {
          'tag': 'p',
          'text': 22
        },
        'gender': {
          'tag': 'p',
          'text':'H'
        }
      },
      {
        'tag':'div',
        'id': 2,
        'name':{
          'tag': 'p',
          'text':'Jorge'
        },
        'age': {
          'tag': 'p',
          'text': 23
        },
        'gender': {
          'tag': 'p',
          'text':'H'
        }
      }
    ]
  }
  
  function createNode(tag) {
    return document.createElement(tag)
  }
  
  function createNodeText(text) {
    return document.createTextNode(text)
  }
  
  function createComplexNode(tag, text) {
    var node = createNode(tag)
    var textNode = createNodeText(text)
    node.appendChild(textNode)
    return node
  }
  
  function buildStructure(obj) {
    var structure = createNode(obj.tag)
    structure.id = obj.id
    obj.koders.forEach(function(koder) {
      var child = buildChild(koder)
      structure.appendChild(child)
    })
    return structure
  }
  
  function buildChild(koder) {
    var child = createNode(koder.tag)
    child.id = koder.id
    var nameNode = createComplexNode(koder.name.tag, koder.name.text)
    var ageNode = createComplexNode(koder.age.tag, koder.age.text)
    var genderNode = createComplexNode(koder.gender.tag, koder.gender.text)
    child.appendChild(nameNode)
    child.appendChild(ageNode)
    child.appendChild(genderNode)
    return child
  }
  
  function addElement(obj) {
    var parent = document.getElementById(kodemia.id)
    var newNode = buildChild(obj)
    parent.appendChild(newNode)
  }
  
  function editElement(id, obj) {
    var children = document.getElementById(id).children
    children[0].innerText = obj.name.text
    children[1].innerText = obj.age.text
    children[2].innerText = obj.gender.text
  }
  
  function removeElement(id) {
    var parent = document.getElementById(kodemia.id)
    var child = document.getElementById(id)
    parent.removeChild(child)
  }
  
  function init() {
    var structureNode = buildStructure(kodemia)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()
  