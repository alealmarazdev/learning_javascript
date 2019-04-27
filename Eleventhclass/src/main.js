/* podemos crear elementos, podemos removerlos y podemos obtenerlos
abstraccion div su nombre edad y genero en objeto, ABSTRAERLO, ESTRUCTURA EN HTML, AGREGAN  O ELIMINAN O EDITA agregar o remover

 */
var nodeObj = {
    "tag": "div",
    "groups": [
        {
            "tag": "div",
            "students": [
                {
                    "tag": "p",
                    "name": "David"
                },
                {
                    "tag": "p",
                    "name": "22"
                },
                {
                    "tag": "p",
                    "name": "H"
                }
            ]
        },
        {
            "tag": "div",
            "students": [
                {
                    "tag": "p",
                    "name": "Ale"
                },
                {
                    "tag": "p",
                    "name": "29"
                },
                {
                    "tag": "p",
                    "name": "M"
                }
            ]
        },
        {
            "tag": "div",
            "students": [
                {
                    "tag": "p",
                    "name": "Carlos"
                },
                {
                    "tag": "p",
                    "name": "28"
                },
                {
                    "tag": "p",
                    "name": "H"
                }
            ]
        },
    ]
}

function createElement(tag){
    return document.createElement(tag);
}

function createGroups(groups){
    var element = document.createElement(groups.tag);
    groups.students.forEach(function(student){
        var studentNode = createStudents(student);
        element.appendChild(studentNode);
    });
    return element;
}

function createStudents(students){
    var element = document.createElement(students.tag);
    var studentElement = document.createTextNode(students.name);
    element.appendChild(studentElement);
    return element;
}

function createStructure(nodeObj){
    var schoolNode = createElement(nodeObj.tag);
    nodeObj.groups.forEach(function(groups){
        var groupsNode = createGroups(groups);
        schoolNode.appendChild(groupsNode);
    });
    return schoolNode;
}

function init(){
    var structureNode = createStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}
  
init()


document.getElementsByTagName("div")[0].setAttribute("id", "koders_wrapper");
document.getElementsByTagName("div")[1].setAttribute("class", "koder")
document.getElementsByTagName("div")[1].setAttribute("id", "koder1");
document.getElementsByTagName("div")[2].setAttribute("class", "koder");
document.getElementsByTagName("div")[2].setAttribute("id", "koder2");
document.getElementsByTagName("div")[3].setAttribute("class", "koder");
document.getElementsByTagName("div")[3].setAttribute("id", "koder3");



var list = document.getElementById("koders_wrapper");   
list.removeChild(list.childNodes[0]);  

var node = document.createElement("div");// Create a <li> node
var node2 = document.createElement("p");  
var textnode = document.createTextNode("Ochoa");         // Create a text node
var node3 = document.createElement("p");  
var textnode3 = document.createTextNode("25");         // Create a text node
var node4 = document.createElement("p");  
var textnode4 = document.createTextNode("H");          // Create a text node
node.appendChild(node2);
node.appendChild(node3);
node.appendChild(node4);   
node2.appendChild(textnode);     
node3.appendChild(textnode3);
node4.appendChild(textnode4);                         // Append the text to <li>
document.getElementById("koders_wrapper").appendChild(node);     // Append <li> to <ul> with id="myList"

