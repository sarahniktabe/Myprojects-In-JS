// variables
let sendBtn = document.querySelector("#sendBtn");
let email = document.getElementById("email");
let subject = document.querySelector("#subject");
let mesage = document.getElementById("message");


// eventListeners
addEventListener();
function addEventListener() {
  //app initialization
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener('blur', validateField)
  subject.addEventListener('blur', validateField)
  message.addEventListener('blur', validateField)
}

// functions
function appInit() {
  //disabled send botton onload
  sendBtn.disabled = true;
}

// validate field of forms
function validateField(){
    
}