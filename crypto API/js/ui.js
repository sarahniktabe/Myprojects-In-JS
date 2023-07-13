class UI {
  printMessage(message, className) {
    let div = document.createElement("div");
    div.className = className;
    //div.innerHTML = message;
    div.appendChild(document.createTextNode(message))
    let showMessage = document.querySelector(".messages")
    showMessage.appendChild(div);
    this.removeMessage()
  }

  removeMessage(){
    setTimeout(() => {
        document.querySelector('.messages div').remove();
        }, 5000);
  }
}
