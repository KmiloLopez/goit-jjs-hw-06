function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const showColor = document.getElementsByClassName('color')

const paragSelect = document.querySelectorAll('p')

const buttonChangeColor = document.querySelector("button")
buttonChangeColor.addEventListener('click',()=>{
  console.log("Cambio de color")
  console.log(getRandomHexColor())
  console.log("ShowColor", showColor)

  
  console.log(paragSelect)
  /* paragSelect[1].insertAdjacentHTML("beforeend",getRandomHexColor()) */
  paragSelect[1].textContent="Background color: -"+ getRandomHexColor() 

  /*  document.body.style.backgroudColor = getRandomHexColor(); */
  /*  showColor.style.backgroundColor = getRandomHexColor();  */
   document.body.style.backgroundColor = getRandomHexColor();



  /* 
  span.color.innerHTML(getRandomHexColor())
  showColor.innerHTML(getRandomHexColor())

  console.log(paragSelect)
  const whatt= paragSelect[1].appendChild
  console.log("queuqueueuue", whatt)
 

  whatt.spam.color.textContent += getRandomHexColor() */
  /* let childrenWidget = showColor.appendChildren
  console.log("firstchild", childrenWidget)
  showColor[0].textContent = getRandomHexColor()
 */
 /*  console.log(paragSelect.spam.color)
  document.body.spam.color = innertext.getRandomHexColor() */
  

})
