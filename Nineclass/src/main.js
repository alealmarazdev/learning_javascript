/* objeto tiene propiedades, valores y atributos
setter, innertext, interhtml, html collection
outputs*/
/* document.write('hola')
document.getElementsByTagName('body')[0].innerText = 'hello word'
document.getElementsByTagName('body')[0].innerHTML = '<h1>hello world</h1>'


console.log(document.getElementsByTagName('div').innerHTML = '<div>')
console.log(document.getElementsByTagName('ul').innerHTML = '<ul>')

console.log(document.getElementsByTagName('li').innerHTML = '<li class="even"></li>')

console.log(document.getElementsByTagName('li').innerHTML = '<li class="even"></li>')
    
console.log(document.getElementsByTagName('li').innerHTML = '<li class="even"></li>')

console.log(document.getElementsByTagName('li').innerHTML = '<li></li>')

console.log(document.getElementsByTagName('li').innerHTML = '</ul>')

console.log(document.getElementsByTagName('div').innerHTML = '</div>')

/* ---------------- */
/* console.log(document.getElementsByTagName('div').innerHTML = '<div>')
console.log(document.getElementsByTagName('ul').innerHTML = '<ul>')

console.log(document.getElementsByClassName('even'))


console.log(document.getElementsByTagName('li').innerHTML = '<li></li>')

console.log(document.getElementsByTagName('li').innerHTML = '</ul>')

console.log(document.getElementsByTagName('div').innerHTML = '</div>') */
 
/* ---------------- */

/* console.log(document.getElementsByTagName('div')[0].innerHTML ) */
/* ---------------- */

/* document.querySelectorAll('.even')

console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('div>ul'));
/* console.log(document.querySelectorAll('div>ul>li')); */
/*console.log(document.querySelectorAll('div>ul>li.even'));
console.log(document.querySelectorAll('div>ul>li')[3]);
 */
/* ---------------- */

/* document.getElementById('container').className = 'holi'
 */
/* console.log(document.getElementsByTagName('ul')[0].style.border = '1px solid blue');

 console.log(document.getElementsByTagName('ul')[1].style.border = '1px solid tomato'); */
 
  document.querySelectorAll('ul').forEach(function (element) {
 element.style.border ='5px solid navy'
 console.log(element);
 }) 

 var liElement = document.getElementsByTagName ('li')
console.log(liElement);
 
 
     for (var i=0; i<liElement.length; i++ ){
        liElement[i].style.border = '5px solid peru'
     }
    
/* nodo abstraccion sacar propiedades o rerepsentar todas las partes de algo */
  
/* var node_div= document.createElement('div')

var node_div= document.createElement('div')
undefined
node_div
<div>​</div>​
var node_div= document.createElement('video')
undefined
node_div
<video>​</video>​
var node_div= document.createElement('h1')
undefined
node_div
<h1>​</h1>​
var txt =document.createTextNode('create world')
undefined
txt
"create world"
node_div.appendChild(txt)
"create world"
node_div
<h1>​create world​</h1>​
document.getElementsByTagName('body')[0].appendChild(node_div)
<h1>​create world​</h1>​

node_div.id = 'title'
"title"
node_div
<h1 id=​"title">​create world​</h1>​
 */

var nodeObj = {
    'tag': 'div',
    'childs':[
        {
            'tag':'h2', 
            'text':'hello'
        }
    ]
}


var node_div= document.createElement('div')
var node_h2= document.createElement('h2')
var txt =document.createTextNode('hello')


node_h2.appendChild(txt)
document.getElementsByTagName('div')[0].appendChild(node_h2)
document.getElementsByTagName('body')[0].appendChild(node_div)

 
 
for (var i=0; i<node_h2.length; i++ ){
        node_h2[i].appendChild(txt)
 }