




const validateForm = document.getElementsByClassName('login-form')
const submitButton = document.querySelector('button')
console.log(validateForm)

validateForm[0].addEventListener("submit", (e)=>{
    e.preventDefault()

    /* const datos = validateForm.appendChild() */

    const {email, password} = e.currentTarget 
    console.log("Email:",email.value)
    
    console.log("Password:",password.value)
    
    /*  luego acceder a sus valores: email.value */

    const emailCharacters=email.value.length
    const passwordCharacters=password.value.length
    /* console.log(emailCharacters)
    console.log(passwordCharacters) */
    if(emailCharacters === 0){
        alert("Todos los espacios son necesarios, no a introducido el email")
        /* console.log ("Introduzca email") */
    }
    if (passwordCharacters === 0) {
        alert("Todos los espacios son necesarios, no a introducido el password")
        /* console.log ("Introdusca password") */
    } /* else {
        alert("Formulario enviado correctamente")
        
        
    } */
    validateForm[0].reset()
    /* let emailEntered= document.getElementsByClassName('email')
    console.log("se envio form")
    console.log(emailEntered) */
    /* validateForm.reset() */
    /* submitButton.addEventListener('click',()=>{
        validateForm[0].reset()
    }) */
    
})


/* document.getElementById('login-form').reset(); */

/* function logReset(event) {
    log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('reset', logReset);

document.getElementsByClassName('login-form').reset(); */