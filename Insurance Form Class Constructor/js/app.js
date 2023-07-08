//variables
let form = document.querySelector("#request-quote");
//let html = new HTMLUI();
//let insurance = new Insurance(make, year, level);

//EventListener
addEventListener();
function addEventListener() {
  document.addEventListener("DOMContentLoaded", function () {
    //display the <options>
    let html = new HTMLUI();
    html.displayYears();
    //console.log(html);
  });

  //sumbit form
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    //read values from the form
    let make = document.getElementById("make").value;
    let year = document.getElementById("year").value;
    let level = document.querySelector('input[name="level"]:checked').value;

    // validating
    if (make === "" || year === "" || level === "") {
      let html = new HTMLUI();
      html.dispalyError("لطفا همه مقادیر به درستی وارد شود.");
    } else {
      const resultDiv = document.querySelector('#result div');
      if (resultDiv !== null) {
        resultDiv.remove();
        
      }
      let insurance = new Insurance(make, year, level);
      const price = insurance.calculatePrice(insurance);
      //console.log(price);
      let html = new HTMLUI();
      html.showResult(price , insurance)
    }
  });
}
