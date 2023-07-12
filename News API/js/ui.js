class UI {
  printMessage(message, className) {
    const div = document.createElement('div');
    div.className = className;
    //div.appendChild(document.createTextNode(message)) //this both are same
    div.innerHTML = message
    document.querySelector('#message').appendChild(div)
    //console.log(div)
    setTimeout(() => {
        this.removemessage()
    }, 3000);

  }
  removemessage(){
    const alert =document.querySelector('.alert');
    if (alert){
        alert.remove();
    }
  }
}
