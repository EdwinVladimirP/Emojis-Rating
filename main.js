const starElement = document.querySelectorAll(".fa-star")
// Este código JavaScript utiliza el método querySelectorAll para seleccionar todos los elementos en el documento HTML que tengan la clase "fa-star" y guarda el resultado en la variable starElement.
const emojisElement = document.querySelectorAll(".far"); 
const colorArray = ["red", "orange", "lightblue", "lightgreen", "green"]; 

updateRating(0); 

starElement.forEach((starElement, index)=>{
    starElement.addEventListener("click", ()=>{
         updateRating(index)
    }); 
}); 
function updateRating(index){
    starElement.forEach((starElement, idx)=>{
        if(idx < index + 1){
            starElement.classList.add("active"); 
        }else{
            starElement.classList.remove("active"); 
        }
    }); 
    emojisElement.forEach((emojisElement) => {
        emojisElement.style.transform = `translateX(-${index * 50}px)`; 
        emojisElement.style.color = colorArray[index]; 
    }); 
}
// Este código JavaScript utiliza una función de flecha (arrow function) para agregar un evento "click" a cada elemento en el arreglo "starElement". Cuando cada elemento es clickeado, se llama la función "updateRating" y se le pasa el índice del elemento clickeado.
// La función "updateRating" toma el índice como su argumento y utiliza otra función de flecha para recorrer el arreglo "starElement" nuevamente. Si el índice actual del elemento es menor que el índice pasado a la función (el elemento clickeado) entonces se agrega la clase "active" a ese elemento del arreglo.
// En resumen este codigo es para añadir una clase "active" a los elementos del arreglo starElement en el cual se hizo click y a todos los elementos anteriores de acuerdo al índice.












