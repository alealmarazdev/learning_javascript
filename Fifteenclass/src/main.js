var regMascotas = {
    client:{"ownerName": "Ale",
    "ownerPhone":"3331293709",
    "ownerAddres":"Pennsylvani 272",
    "pets":{
        "animal":"dog",
        "name":"Vienna",
        "breed":"dashound",
        "birthDate":"28/03/2016",
        "nextappoinment":"28/06/2019"
    }}
    
  }


  function request() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
        buildStructure(this.response);
      }
    }
    xhttp.open('GET', 'https://ajaxkode.firebaseio.com/ale.json', true)
    xhttp.send()
  }
   

  
  function buildPets(client) {
    var allPets = ''    
    console.log(client)
    client.forEach(function(pet) {
      console.log(pet);
      
      var buildPet = ''
      buildPet +='<div class="card" style="width: 18rem;">'
      buildPet +='    <div class="card-body">'
      buildPet +='      <p class="card-text">'+ pet.ownerName+'</p>'      
      buildPet +='      <p class="card-text">'+ pet.ownerPhone +'</p>'
      buildPet +='      <p class="card-text">'+ pet.ownerAddres +'</p>'
      buildPet +='      <p class="card-text">'+ pet.pets.animal +'</p>'
      buildPet +='    </div>'
      buildPet +='</div>'
    
      allPets += buildPet
    })
    document.getElementById('pets-wrapper').innerHTML = allPets
   
  }

  function buildStructure(res) {
    var resObj = JSON.parse(res)
   console.log(resObj);
    console.log(resObj["-LdwPyq5aiUThgzw27NB"]);
    console.log(resObj["-LdwPyq5aiUThgzw27NB"].client.pets.animal);
    
    document.getElementById('ownerName').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.ownerName

    document.getElementById('ownerPhone').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.ownerPhone

    document.getElementById('ownerAddres').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.ownerAddres
    document.getElementById('animal').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.pets.animal


    document.getElementById('name').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.pets.name
    document.getElementById('breed').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.pets.breed
    document.getElementById('birthDate').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.pets.birthDate
    document.getElementById('nextappoinment').innerText = resObj["-LdwPyq5aiUThgzw27NB"].client.pets.nextappoinment
    console.log(resObj["-LdwPyq5aiUThgzw27NB"]);

    buildPets(resObj.client)
   
  }
  
  function requestPost() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
        console.log(this.response);
      }
    }
    xhttp.open('POST', 'https://ajaxkode.firebaseio.com/ale.json', true)
    xhttp.send(JSON.stringify(regMascotas))

  }


//   {"name":"--LdwPyq5aiUThgzw27NB"}
// {"name":"-LdwPyq5aiUThgzw27NB"} client


 
  request()
  


