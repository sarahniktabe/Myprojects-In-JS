//classes
let ui = new UI();
let crypto =new CryptoAPI();

//addEventListener

Listener();

function Listener() {
  document.querySelector("#form").addEventListener("submit", getValue);
}

//functions
function getValue(e) {
  e.preventDefault();
  let currency = document.querySelector("#currency").value;
  let cryptocurrency = document.querySelector("#cryptocurrency").value;

  if (currency === "" || cryptocurrency === "") {
    //materials class
    ui.printMessage("please enter atleast one parametr","deep-orange darken-4 card-panel");
  } else{
    crypto.queryAPI(currency , cryptocurrency)
    .then(data => ui.showResult(data.resultApi[0], currency));
  }
}
