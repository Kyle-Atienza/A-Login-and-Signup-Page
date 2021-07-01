//window.alert("connected")


var forms =  document.querySelector(".forms")
var login = document.querySelector('.login-tab')
var signup = document.querySelector('.signup-tab')
console.log(signup)
// console.log(forms)
function showLogin(){
    forms.style.transform = "translateX(0%)"

    signup.classList.remove("active")
    login.classList.add("active")
}
function showSignup(){
    forms.style.transform = "translateX(-50%)"

    login.classList.remove("active")
    signup.classList.add("active")

}


function showhidePassword(passInput){

    var input = document.querySelector(passInput + ">.password")
    
    var eye = document.querySelector(passInput + '>.eye>i')
    var type = input.getAttribute("type") === "password" ? "text" : "password"

    input.setAttribute("type", type)
    eye.classList.toggle("fa-eye-slash")

}

function validateEmail(){

    //checks if the email is valid or invalid
    //if true the inputs border turns green
    //if not the inputs border turns red

    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //pattern for valid email
    var email = document.querySelector('.signup>form>.email>.email').value //value of the email value
    var email_label = document.querySelector('.signup>form>.email>label') //label for confirmation
    var email_input = document.querySelector('.signup>form>.email>input') //input of email

    
    email_input.style.border = "none"
    if(email == ""){
        email_input.style.borderBottom = "1px solid black"
        email_label.textContent = "ENTER A EMAIL ADDRESS"
    }else if(email.match(pattern)){
        email_input.style.border = "1px #04AA6D solid"
        email_label.textContent = "VALID EMAIL ADDRESS"
    }else{
        email_input.style.border = "1px #DB2C47 solid"
        email_label.textContent = "INVALID EMAIL ADDRESS"
    }

}

function confirmPassword(){

    //checks if the password and confirm is match
    //if true the inputs border turns green
    //if not the inputs border turns red

    var button = document.querySelector('.signup>form>.submit')//the submit button for the signup form

    var password = document.querySelector('.password-signup>.password').value //value of the password input
    var confirm = document.querySelector('.confirm-password-signup>.password').value //value of the confirm input
    var matchPassword = password == confirm //is the password and confirm the same

    var confirm_label = document.querySelector('.signup>form>.confirm-password-signup>label') //label for the confirmation

    var password_input = document.querySelector('.signup>form>.password-signup>input')//input of password
    var confirm_input = document.querySelector('.signup>form>.confirm-password-signup>input')//input of confirm
    

    //resets the border formatting
    password_input.style.border = "none"
    confirm_input.style.border = "none"

    if(password == "" && confirm == ""){ //if both the inputs are empty
        password_input.style.borderBottom = "1px solid black"
        confirm_input.style.borderBottom = "1px solid black"
        button.setAttribute("disabled", "")
        confirm_label.textContent = "CONFIRM PASSWORD"

    }else if(matchPassword){ //if the inputs matched
        password_input.style.border = "1px #04AA6D solid"
        confirm_input.style.border = "1px #04AA6D solid"
        button.removeAttribute("disabled")
        confirm_label.textContent = "PASSWORD MATCHED"

    }else{//if the inputs did not match
        password_input.style.border = "1px #DB2C47 solid"
        confirm_input.style.border = "1px #DB2C47 solid"
        button.setAttribute("disabled", "")
        confirm_label.textContent = "PASSWORD DID NOT MATCH"
    }

}