


console.log("connected")
const inputChar = document.getElementById('validation-input')
let charLenth = 0

inputChar.addEventListener("input",(e)=>{
    let charinput= e.target.value
    let arrayNew = Array.from(charinput)
/* console.log("ACA1",arrayNew) */
let inputLength= arrayNew.length
/* console.log("ACA2",inputLength) */
   charLenth= inputLength
   /* console.log("ACA3",charLenth) */
 })
 inputChar.addEventListener("blur",(e)=>{
    console.log("Se activo blur")
    
    
    if(charLenth === 6 ){
        inputChar.classList.add('valid')
    }
    else{
        inputChar.classList.add('invalid')
    }
     
     
     
     /* inputChar.style.borderColor= '#f44336' */

})

