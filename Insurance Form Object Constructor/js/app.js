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
      let insurance = new Insurance(make, year, level);
      const price = insurance.calculatePrice(insurance);
    }
  });
}

//objects

//every thing related to the
function Insurance(make, year, level) {
  this.make = make;
  this.year = year;
  this.level = level;
}

//calculate price
Insurance.prototype.calculatePrice = function (info) {
  let makePrice = 0;
  let base = 2000000;
  // get the make value
  const makeKey = info.make;
  /*
        make:1 ==> pride    1.15    
        make:2 ==> optima   1.30
        make:3 ==> porches  1.80
     */
  switch (makeKey) {
    case "1":
      makePrice = base * 1.15;
      break;
    case "2":
      makePrice = base * 1.3;
      break;
    case "3":
      makePrice = base * 1.8;
      break;
  }
  //console.log(makePrice);

  //get the year
  const year = info.year;
  const diffrence = this.getYearDiffrence(year);
  console.log(diffrence);

  //3% for each year
  makePrice = makePrice - (((diffrence * 3) / 100) * makePrice);
    console.log(makePrice);

};

//get the diffrence between 2 year
Insurance.prototype.getYearDiffrence = function (year) {
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
  year = max - year;
  return year;
};

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