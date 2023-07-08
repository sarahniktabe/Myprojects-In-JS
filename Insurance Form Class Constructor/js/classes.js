//classes

//every thing related to the
class Insurance {
  constructor(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
  }
  calculatePrice(info) {
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
    //console.log(diffrence);

    //3% for each year
    makePrice = makePrice - ((diffrence * 3) / 100) * makePrice;
    //console.log(makePrice);

    //get the level
    const level = info.level;
    //console.log(level)
    makePrice = this.calculateLevel(level, makePrice);
    //console.log(makePrice);
    return makePrice;
  }

  //get the diffrence between 2 year with dates
  getYearDiffrence(year) {
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
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };

    // max years
    const now = new Date().toLocaleDateString("fa-IR");
    let nowyear = now.slice(0, 4);
    let max = fixNumbers(nowyear);
    //get diffrence
    year = max - year;
    return year;
  }

  //get the level
  calculateLevel(level, makePrice) {
    /*
        basic ==> increase 30% => 1.30
        complete ==> increase 50% => 1.50
        */
    if (level == "basic") {
      makePrice = makePrice * 1.3;
    } else {
      makePrice = makePrice * 1.5;
    }
    return makePrice;
  }
}

//every things related to the html
class HTMLUI {
  //display years
  displayYears() {
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
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
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
  }

  //display error
  dispalyError(err) {
    const div = document.createElement("div");
    div.classList = "error";
    div.innerHTML = err;
    form.insertBefore(div, document.querySelector(".form-group"));
    setTimeout(() => {
      document.querySelector(".error").remove();
    }, 5000);
  }

  //display factor to the form
  showResult(price, info) {
    const result = document.querySelector("#result");
    let div = document.createElement("div");

    //convert make value to the name car
    let makeKeyConvert = info.make;
    /*
    make:1 ==> pride      
    make:2 ==> optima  
    make:3 ==> porches
 */
    switch (makeKeyConvert) {
      case "1":
        makeKeyConvert = "پراید";
        break;
      case "2":
        makeKeyConvert = "اپتیما";
        break;
      case "3":
        makeKeyConvert = "پورشه";
        break;
    }
    //console.log(makeKeyConvert)

    //convert level en to persian
    let levelconvert = info.level;
    /*
basic ==> ساده
complete ==> تکمیلی
*/
    if (levelconvert == "basic") {
      levelconvert = "ساده";
    } else {
      levelconvert = "تکمیلی";
    }

    // show factor
    div.innerHTML = `
<p class="header">خلاصه فاکتور</p>
<p>مدل ماشین: ${makeKeyConvert}</p>
<p>تاریخ ساخت:${info.year}</p>
<p>نوع بیمه : ${levelconvert}</p>
<p class="total">قیمت نهایی: ${price}</p>
`;
    //spinner
    let spinner = document.querySelector("#loading img");
    spinner.style.display = "block";
    setTimeout(() => {
      //hide spinner after 3 second
      spinner.style.display = "none";
      //append to the result
      result.appendChild(div);
    }, 3000);
  }
}
