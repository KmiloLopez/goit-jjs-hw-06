console.log("conectado")


const inputName = document.getElementById('name-input')
const spanText = document.getElementById('name-output')

inputName.addEventListener('input', (e)=>{
    spanText.textContent = e.target.value
    /*  if (e.target.value === undefined){
        spanText.textContent ="ANONININI"
    } */
    if (e.target.value === ""){
        spanText.textContent ="Anonymous"}
    
    
})


