/* var carObj= {
    "marca": "Renault",
    "modelo": "Duster",
    "año": 2018,
    "color": {
        "exterior":"ladrillo",
        "interiores": "gris"
    },
    "transmision": "automatica",
    "puertas": 5,
    "model": "elegante",
    "callModel": function (params) {
        return this.model + ' ' +  this.año
    },
    get getAño(){
        return this.año
    },
    set setAño(){
        this.año = año
    }
}
 */
// Los metodos se utilizan para la constucion de cosas, 

// Eventos podemos sacar todos los elementos que sucede en una pagina web

// onchange
// onclick
// hover
// scrollload accion de un usuario interpretada por el DOM

// function changes (element){
//     element.innerText= 'Hola'
//     element.style.backgroundColor ='peru'
// }
// /* 
// document.getElementById("container1").classList.add('MyClass');

// document.getElementById("container").classList.remove('MyClass');

//  */

// function myFunction() {
//     var element = document.getElementById("container1"); 
//     element.classList.toggle("MyClass");
//   } 


//   document.getElementById(number).value 

  function changes(element){
    console.log(element.value);
    var dolares = element.value
    var pesos= dolares / 20
    // console.log (pesos)
    document.getElementById("USD").value = pesos
  }

  function chang(element){
    console.log(element.value);
    var pesos = element.value
    var dolares = pesos * 20
    // console.log (dolares)
    document.getElementById("MXN").value = dolares
  }

  
 