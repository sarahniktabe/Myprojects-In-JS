//classes
let ui = new UI();

//addEventListener

Listener();

function Listener() {
  document.querySelector("#form").addEventListener("submit", getValue);
}

//functions
function getValue(e) {
  e.preventDefault();
  let Currency = document.querySelector("#currency").value;
  let Cryptocurrency = document.querySelector("#cryptocurrency").value;

  if (Currency === "" || Cryptocurrency === "") {
    //materials class
    ui.printMessage("please enter atleast one parametr","deep-orange darken-4 card-panel");
  }
}
