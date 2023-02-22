const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

console.log("conectado")
/* const imagesDom = document.querySelector('gallery')  */
const imagesDom = document.getElementsByClassName('gallery')
console.log (imagesDom)
/* const fragment = document.createDocumentFragment() */

const stringLi =images.map((imag) =>
  
  
 `<li><img src="${imag.url}" alt="${imag.alt}" width="300"> </li>`
 
 )
 .join("");
 console.log(stringLi)

 imagesDom[0].insertAdjacentHTML("afterbegin", stringLi)













/*  console.log("conectado")
/* const imagesDom = document.querySelector('gallery') 
const imagesDom = document.getElementsByClassName('gallery')
console.log (imagesDom)
/* const fragment = document.createDocumentFragment() 

const stringLi =images.map((imag) =>
  
 
 `<img src="${imag.url}" alt="${imag.alt}" width="300"> `)
 .join("");
 console.log(stringLi)

 imagesDom[0].insertAdjacentHTML("afterbegin", stringLi) */