// variables
let sendBtn = document.querySelector("#sendBtn");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let resetBtn = document.querySelector("#resetBtn");
let form = document.querySelector("#email-form");

// eventListeners
addEventListener();
function addEventListener() {
  //app initialization
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
  resetBtn.addEventListener("click", resetForm);
  form.addEventListener("click", submitForm);
}

//spinner
function submitForm(e) {
  e.preventDefault();

  //show spinner
  var spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  // show mail img
  const sendEmialImg = document.createElement("img");
  sendEmialImg.src = "img/mail.gif";
  sendEmialImg.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    const showEmailImg = document.getElementById("loaders");
    showEmailImg.appendChild(sendEmialImg);

    //reset form

    setTimeout(() => {
      resetForm();
      sendEmialImg.remove();
    }, 5000);
  }, 3000);
}

// functions
function appInit() {
  //disabled send botton onload
  sendBtn.disabled = true;
}

// validating field of form
function validateField() {
  console.log(this);
  // validating length of field
  validateLength(this);

  //validating Email
  if (this.type === "email") {
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

// validate lenght of field
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//validating Email field contains @
function validateEmail(e) {
  console.log(e.value);
  var emailText = e.value;
  if (emailText.includes("@")) {
    e.style.borderBottomColor = "green";
    e.classList.remove("error");
  } else {
    e.style.borderBottomColor = "red";
    e.classList.add("error");
  }
}

//reset form
function resetForm() {
  form.reset();
}
