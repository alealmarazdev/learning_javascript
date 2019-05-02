// setTimeout (function () {
//     console.log('holi');
    
// },5000)

// var interval = setInterval(function(){
//     console.log('ontas');
    
// }, 5000)

// clearInterval(interval)




// var i= 60
// var interval = setInterval (function () {
//     i--  
//     console.log( i +' seg ');
//    if (i ===0 ){
//         clearInterval(interval)
//    }
// },1000)

// var min = i * 60
// var i= 60
// var interval = setInterval (function () {
//     i--  
//     console.log( min + i +' seg ');
//     if (i ===0 )  {
//         min--
//    if ((i ===0 ) && ( min ===0)){
//         clearInterval(interval)
//    }
// }},1000)

// var xhttp = new XMLHttpRequest() 

// xhttp.onreadystatechange = function (){
//     console.log(this. readyState, this.status, this.responseText);
// }

// xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true )

// xhttp.send()


// var xhttp = new XMLHttpRequest()

// function elFeoObjeto() {xhttp.onreadystatechange = function() {
//   console.log(this.readyState, this.status)
//   if( this.readyState === 4 && this.status === 200) {
//     var respuesta = (JSON.parse(this.responseText))
//     console.log(respuesta);
//     document.write(respuesta.name + (' nuestro domicilio es: ') + respuesta.location + (', nuestros clientes son: ') + respuesta.pets[0].owner.name +  (' y él tiene el numero de tel ') +respuesta.pets[0].owner.phone + (' y él tiene un ') + respuesta.pets[0].breed + (' con el nombre ') + respuesta.pets[0].name + ('.'));    
   
    
//   } else if( this.status === 404 ) {
//     console.log('NOPE')
//   }
// }
// }
// elFeoObjeto( )
// xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
// xhttp.send()



