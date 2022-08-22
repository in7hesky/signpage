const alertText = "*Passwords do not match"
const passText = "*Passwords match"


let passwordInput = document.querySelector(".password")
let confirmInput = document.querySelector(".password-confirm")
let messageBox = document.createElement("div")
passwordInput.parentNode.appendChild(messageBox)

confirmInput.addEventListener("input", alertUser, {once: true})

function alertUser() {
    messageBox.classList.add("message")
    messageBox.textContent = alertText
    messageBox.style.color = "red"

    passwordInput.classList.add("error-input")
    confirmInput.classList.add("error-input")
    
    passwordInput.addEventListener("input", checkConfirmation)
    confirmInput.addEventListener("input", checkConfirmation)
}
    
function checkConfirmation() {
    if (passwordInput.value &&
        passwordInput.value === confirmInput.value) {
        messageBox.style.color = "#596D48"
        messageBox.textContent = passText
        passwordInput.classList.remove("error-input")
        confirmInput.classList.remove("error-input")
    } else {
        alertUser()
    } 
}
    