//variables
let form = document.querySelector("#request-quote");
let html = new HTMLUI();
let insurance = Insurance();

//EventListener
addEventListener();
function addEventListener() {
  document.addEventListener("DOMContentLoaded", function () {
    //display the <options>
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
      html.dispalyError("لطفا همه مقادیر به درستی وارد شود.");
    } else {
      insurance(make, year, level);
      const price = insurance.calculatePrice()
    }
  });
}

//objects

//every thing related to the
function Insurance (make, year , level){
  this.make
  this.year
  this.level

}


//calculate price
Insurance.prototype.calculatePrice = function(){
  
}

//every things related to the html
function HTMLUI() {}

//display years
HTMLUI.prototype.displayYears = function () {
  //change Persian number to English number
  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };

  // max years
  const now = new Date().toLocaleDateString("fa-IR");
  let nowyear = now.slice(0, 4);
  let max = fixNumbers(nowyear);
  //console.log(max);

  //min years
  let min = max - 20;

  //access to the select tag
  let selectYear = document.querySelector("#year");

  //create a loop for making option tag
  for (let i = max; i >= min; i--) {
    //create option
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    //append
    selectYear.appendChild(option);
  }
};

//display error
HTMLUI.prototype.dispalyError = function (err) {
  const div = document.createElement("div");
  div.classList = "error";
  div.innerHTML = err;
  form.insertBefore(div, document.querySelector(".form-group"));
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 5000);
};
