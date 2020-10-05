let boton=document.getElementById("boton");
 boton.addEventListener("click", function(){
let cancion=document.getElementById("cancion").value;
var lista=document.getElementById("lista");
var etiquetaNueva=document.createElement("li")
etiquetaNueva.textContent=cancion;
lista.appendChild(etiquetaNueva);
 })
lista.addEventListener("dblclick",function(e){
console.log(e.target);
let cancionEliminar=e.target;
lista.removeChild(cancionEliminar);
})
 

 