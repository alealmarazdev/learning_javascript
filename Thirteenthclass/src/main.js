// function myFunction(element) {
//      var liList = document.querySelectorAll('.on')
//      liList.forEach(function(e){
//          e.classList.remove('off')
//      })
//      element.classList.toggle('off');
// } 

var liList = document.querySelectorAll('.on')[0]
liList.addEventListener('click', function(){
     console.log('ontas?');
 })


var liList = document.querySelectorAll('.on')[3]
liList.addEventListener('mouseover', function(){
     console.log('te pido uber');
 })

 var liList = document.querySelectorAll('.on')[4]
 liList.addEventListener('mouseover', function(event){
      console.log(event);
  })
 
  
//   liList.addEventListener('mouseover', function(event){
//     var liList = document.querySelectorAll('li')
//     var liList = document.querySelectorAll('.on')
//      liList.forEach(function(e){
//          e.classList.remove('on')
//      })
//      element.classList.toggle('on');
// })

// function myFunction(element) {
//      var liList = document.querySelectorAll('.on')
//      liList.forEach(function(e){
//          e.classList.remove('off')
//      })
//      element.classList.toggle('off');
// } 
// var liList = document.querySelectorAll('.on')[2]
// liList.addEventListener('click', function(event){
//     // event.classList.remove('off')
//     })
//     liList.classList.toggle('off');
 function addEvent(){
     var elementList = document.querySelectorAll('.on')
     elementList.forEach(function(node){
         node.addEventListener('click',function(){
             changes(node,elementList )
         })
     })
 }

 function changes (element, elementList){
     elementList.forEach(function (e) {
        e.classList.remove('off')   
     })
     element.classList.toggle('off');
 }

window.onload= function(){
    addEvent()
}



// ejercicio de tarea ejercicio de conversion de divisas con addevent listern de pesos a dolares y euros remove.eventlistener en el input de pesos mexicanos un button que solo conviertas que solo que convierta a uno

// browser Object model
// window.open
// window.close
// window.location
// window.location.hostname
// que es un protocolo y http,servidor y servidor local memoria del cache y localStorage, por que funcionan sin el window, porque ya estas rn rl window sessionStorage
// window.location.pathname
// protocal history vback forward



window

window.innerWidth
811
window.innerWidth
1116
window.innerHeight