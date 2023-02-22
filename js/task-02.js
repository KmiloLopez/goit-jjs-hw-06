const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log("conectado")

const inGredi= document.getElementById('ingredients')

const fragment = document.createDocumentFragment()

ingredients.forEach(ingredi =>{
  
   const newLi = document.createElement('li')
  newLi.textContent=ingredi
  newLi.classList.add('item')
  fragment.appendChild(newLi) 
  
})

inGredi.appendChild(fragment)


/* 
console.log("conectado")
const ulIngredients =document.querySelector("#ingredients")

console.log(ulIngredients)

const fragment = document.createDocumentFragment 
ingredients.map((el)=>{
  const newLi= document.createElement('li')
  ulIngredients.appendChild(newLi)
  
  const ingreName = document.createTextNode(el)
   
   newLi.appendChild(ingreName)
  newLi.classList.add('item') 
  

}) */

