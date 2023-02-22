


const inputSlide = document.getElementById('font-size-control')
let textT = document.getElementById('text')
console.log(textT)


inputSlide.addEventListener('input',()=>{
    
    console.log(inputSlide.value)
    textT.style.fontSize=inputSlide.value + "px"


})