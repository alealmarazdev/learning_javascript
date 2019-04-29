/* getter y setter son una forma de hacer las cosas, son metodos.
nodo es la abstraccion de un elemento html, representado como un objeto, se puede acceder a sus metodos y propiedades
 */
/* var nodeObj = {
    'tag': 'div',
    'children':[
        {
            'tag':'h2', 
            'text':'hello'
        },  {
            'tag':'h2', 
            'text':'hello'
        }, 

    ]
}

 
function createParent(tag){
    return element = document.createElement(tag)
}

function createChild(child){
    var element= document.createElement(child.tag)
    var textElement =document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
}

function buildStructure(nodeObj){
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
       var childNode = createChild(child )
       parentNode.appendChild(childNode)

    })
    return parentNode
}

function init(){
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}

init()
 */
/* var schoolObj = {
    'tag': 'div',
    'children':[
        {
            'tag':'ul', 
            'grandChildren':[
                {
                    'tag':'li', 
                    'alumn':'pedro'
                },   {
                    'tag':'li', 
                    'alumn':'pedro'
                },  {
                    'tag':'li', 
                    'alumn':'pedro'
                }, 
            ]
        },  {
            'tag':'ul', 
            'grandChildren':[
                {
                    'tag':'li', 
                    'alumn':'pedro'
                },   {
                    'tag':'li', 
                    'alumn':'pedro'
                },  {
                    'tag':'li', 
                    'alumn':'pedro'
                }, 
            ]
        },  
    ]
}

 
function createParent(tag){
    return element = document.createElement(tag)
}
/* console.log(createParent()); */

// function createChildren(tag){
//     return element = document.createElement(tag)
// }

/* console.log(createChildren()); */

/* function createChild(child){
    var element= document.createElement(child.tag)
    var childElement =document.createElement(child.tag)
    var textElement =document.createTextNode(child.text)
    childElement.appendChild(textElement)
    element.appendChild(childElement)
    return element
}


function parentStructure(schoolObj){
    var parentNode = createParent(schoolObj.tag)
    schoolObj.children.forEach(function(child) {
       var childNode = createChild(child )
       parentNode.appendChild(childNode)
    })
    return parentNode

}

function childStructure(grandChildren){
    var childrenNode = createChildren(grandChildren.tag)
    schoolObj.children.forEach(function(child) {
        var childNode = parentStructure(child )
        parentNode.appendChild(childNode)
     })
     return childrenNode
}


function init(){
    var structureNode = parentStructure(schoolObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}

init()  */
/* remove desde el parent al child */

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