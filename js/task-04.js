console.log("conectado")

let counterValue = 0
const buttons = document.querySelectorAll('button')
const spanValue = document.getElementById('value')
console.log(buttons)

const incrementB = buttons[1]
const decrementB = buttons[0]

incrementB.addEventListener("click", adding);
function adding(event){
    counterValue++
    console.log ("aca se cliclio")
    spanValue.textContent = counterValue
}
decrementB.addEventListener("click", ()=>{
    counterValue--
    spanValue.textContent = counterValue
})