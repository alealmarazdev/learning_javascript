// dado un objeto sacar la primera parte del curp. el objeto tendra
var person_array = [
    {
        nombre:'Juan', 
        apellidoPat:'Guzman', 
        apellidoMat:'Linares', 
        fechaNac:'1996-02-11', 
        genero:'hombre'
    },
    {
        nombre:'Daniel', 
        apellidoPat:'Luzman', 
        apellidoMat:'Minares',
        fechaNac:'1996-02-11', 
        genero:'hombre'
    }, 
    {
        nombre:'Luan', 
        apellidoPat:'Fuzman', 
        apellidoMat:'Rinares',
        fechaNac:'1996-02-11',
        genero:'mombre'
    }
]
    
function Person(nombre, apellidoPat, apellidoMat, fechaNac, genero) {
    this.nombre = nombre
    this.apellidoPat = apellidoPat
    this.apellidoMat= apellidoMat
    this.fechaNac = fechaNac
    this.genero= genero
    this.getCurp= function (){
        return (this.apellidoPat.slice(0, 2) + this.apellidoMat.slice(0,1) + this.nombre.slice(0,1)   + this.fechaNac.slice(2, 4) + this.fechaNac.slice(5, 7) + this.fechaNac.slice(8, 10) + this.genero.slice(0,1)).toUpperCase()
 
     }
}

// las primeras dos letras del apellido, primera letra de apellido materno, la primera letra de la vocal, fecha de nacimiento posiciones 23, 56, 89, la primera letra del genero.
// appeliido materno chartART y nombe



person_array.forEach(function (obj) {
    var new_person= new Person (obj.nombre, obj.apellidoPat, obj.apellidoMat, obj.fechaNac, obj.genero);    
    console.log(new_person.getCurp())
})
// console.log(person_array.getCurp())
var person_array = [
    {
        nombre:'Juan', 
        apellidoPat:'Guzman', 
        apellidoMat:'Linares', 
        fechaNac:'1996-02-11', 
        genero:'hombre'
    },
    {
        nombre:'Juan', 
        apellidoPat:'Guzman', 
        apellidoMat:'Linares',
        fechaNac:'1996-02-11', 
        genero:'hombre'
    }, 
    {
        nombre:'Juan', 
        apellidoPat:'Guzman', 
        apellidoMat:'Linares',
        fechaNac:'1996-02-11',
        genero:'hombre'
    }
]
    

// -----------
// DoM es document objet model, se representa se puede cambiar todos los elementos del html y css. El DOM es un estandar define el estandar de acceso a los documentos. 
//nodo que es? podemos relacionar los nodos atraves de metodos del documento html atravesde su selectos*{ selectores complejos spat
/* Al margen de la selección de elementos a través de clases e IDs, algo que es realmente cómodo y muy frecuentemente utilizado en CSS, existe un amplio abanico de métodos para seleccionar elementos dependiendo de la estructura del documento HTML denominados combinadores CSS:
Nombre 	Ejemplo 	Significado
Agrupación de selectores 	p, div { } 	Se aplican estilos a varios elementos.
Selector descendiente 	#page div { } 	Se aplican estilos a elementos dentro de otros.
Selector hijo 	#page > div { } 	Se aplican estilos a elementos hijos directos.
Selector hermano adyacente 	div + div { } 	Se aplican estilos a elementos que siguen a otros.
Selector hermano general 	div ~ div { } 	Se aplican estilos a elementos al mismo nivel.
Selector universal 	#page * { } 	Se aplican estilos a todos los elementos.
 */
/*  En informática y en telecomunicación, de forma muy general, un nodo es un punto de intersección, conexión o unión de varios elementos que confluyen en el mismo lugar. Ahora bien, dentro de la informática la palabra nodo puede referirse a conceptos diferentes según el ámbito en el que nos movamos*/

/* Combinador css de hermano posterior '~'
a ~ b {} El signo '~' en el selector obliga a que 'b' sea hermano de 'a' (estén ambos contenidos diréctamente en el mismo elemento). No importa que en el html entre ambos haya otros elementos hermanos interpuestos.

h2 ~ p {}

<article>
  <h2>título</h2>
  <p>texto del primer párrafo&lt/p>
  <img src='... />
  <p>texto de otro párrafo&lt/p>
</article>
El selector css del código previo h2 ~ p {} afecta por igual a los dos párrafos ya que ambos son hermanos posteriores del título (h2): están contenidos diréctamente en el mismo elemento html, ambos (el título y los párrafos) tienen al article como padre.

Combinador de hermano posterior adyacente '+'
a + b {}
Representado por el signo '+' selecciona, al igual que el anterior, cada elemento 'b' que sea hermano de un 'a' y además estén adyacentes: 'b' tiene que aparecer en el DOM inmediatamente después de cerrar 'a', no puede haber ningún otro hermano que los separe o se interponga entre ellos.
En el bloque de código anterior si el combinador css en vez de ser el de hermano posterior ~ es el de hermano posterior adyacente h2 + p {} sólo el primer párrafo (el que sigue al h2) se vería afectado por la regla css. */
/*
document.getElementById('container')// devuelve el div>document.getElementById('container')// devuelve el div>
document.getElementById('container').id// devuelve el div> solo su id
document.getElementsByTagName('div')//devuelve un array
document.getElementsByTagName('div')[0]//devuelve el div en especifico
document.getElementsByClassName('box')//regresa los nodos que usan esa clase
*/

var divs_array = [
    {
        height: '100px',
        width: '30px',
        backgroundColor: 'red'
    },{
        height: '100px',
        width: '30px',
        backgroundColor: 'peru'
    },{
        height: '100px',
        width: '30px',
        backgroundColor: 'navy'
    },{
        height: '100px',
        width: '30px',
        backgroundColor: 'green'
    },{
        height: '100px',
        width: '30px',
        backgroundColor: 'gold'
    }

]
// se necesita llamar a cada uno de los divs y luego juntarlos con sus estilos


var divs = document.getElementsByTagName('div')

// console.log(divs)

/*divs_array.forEach(function (element,index){
    divs[index].style.height = element.height
    divs[index].style.width = element.width
    divs[index].style.backgroundColor = element.backgroundColor
})*/

for(var i=0; i<divs_array.length; i++ ){
 divs[i].style.height = divs_array[i].height
  divs[i].style.width = divs_array[i].width
  divs[i].style.backgroundColor = divs_array[i].backgroundColor
}



koders_array.forEach(function (element) {
if (element.hobbies.includes('Videojuegos')){   
        var persona = new Koders(element.nombre,  element.edad, element.genero,  element.hobbies)
        console.log(persona.getNameHobbie()) 
    }
})