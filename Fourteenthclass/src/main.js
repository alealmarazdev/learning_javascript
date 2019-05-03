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
//     var vetName = respuesta.name;
//     console.log(vetName);
//     document.getElementById("bussinesName").innerHTML = vetName
//     var vetLoc= respuesta.location;
//     console.log(vetLoc);
//     document.getElementById("location").innerHTML = vetLoc

// function addElement( id, elemento){
//   id= "nameOwner1"
//   var elemento = respuesta.pets[0].owner.name
//   document.getElementById(id).innerHTML = elemento
// }

// addElement()



//     // var nameOwner = respuesta.pets[0].owner.name;
//     // console.log(nameOwner);
//     // document.getElementById("nameOwner1").innerHTML = nameOwner
     
//     var telOwner = respuesta.pets[0].owner.phone;
//     // console.log(telOwner);
//     document.getElementById("telOwner1").innerHTML = telOwner 
     
//     var dogBreed = respuesta.pets[0].breed;
//     // console.log(dogBreed);
//     document.getElementById("dogBreed1").innerHTML = dogBreed 

//     var dogName=  respuesta.pets[0].name;
//   //  console.log(dogName);
//    document.getElementById("dogName1").innerHTML = dogName
   
   
  
//    var nameOwner = respuesta.pets[1].owner.name;
//    console.log(nameOwner);
//    document.getElementById("nameOwner2").innerHTML = nameOwner
    
//    var telOwner = respuesta.pets[1].owner.phone;
//    console.log(telOwner);
//    document.getElementById("telOwner2").innerHTML = telOwner 
    
//    var dogBreed = respuesta.pets[1].breed;
//    console.log(dogBreed);
//    document.getElementById("dogBreed2").innerHTML = dogBreed 


//    var dogName=  respuesta.pets[1].name;
//   console.log(dogName);
//   document.getElementById("dogName2").innerHTML = dogName 


 
//   var nameOwner = respuesta.pets[2].owner.name;
//   console.log(nameOwner);
//   document.getElementById("nameOwner3").innerHTML = nameOwner
   
//   var telOwner = respuesta.pets[2].owner.phone;
//   console.log(telOwner);
//   document.getElementById("telOwner3").innerHTML = telOwner 
   
//   var dogBreed = respuesta.pets[2].breed;
//   console.log(dogBreed);
//   document.getElementById("dogBreed3").innerHTML = dogBreed 


//   var dogName=  respuesta.pets[2].name;
//  console.log(dogName);
//  document.getElementById("dogName3").innerHTML = dogName 
//   } else if( this.status === 404 ) {
//     console.log('NOPE')
//   }
// }
// }
// elFeoObjeto( )
// xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
// xhttp.send()




function request() {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
      buildStructure(this.response);
    }
  }
  xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
  xhttp.send()
}


function buildPets(pets) {
  var allPets = ''
  pets.forEach(function(pet) {
    var buildPet = ''
    buildPet +='<div class="card" style="width: 18rem;">'
    buildPet +='    <div class="card-body">'
    buildPet +='      <p class="card-text">'+ pet.name +'</p>'
    buildPet +='      <p class="card-text">'+ pet.breed +'</p>'
    buildPet +='      <p class="card-text">'+ pet.owner.name +'</p>'
    buildPet +='    </div>'
    buildPet +='  </div>'
    
    allPets += buildPet
  })
  document.getElementById('pets-wrapper').innerHTML = allPets
}

function buildStructure(res) {
  var resObj = JSON.parse(res)
  console.table(resObj);
  document.getElementById('title').innerText = resObj.name
  document.getElementById('location').innerText = resObj.location
  buildPets(resObj.pets)
}

request()
