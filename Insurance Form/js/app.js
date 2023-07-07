//variables

//functions
document.addEventListener("DOMContentLoaded", function () {
  //display the <options>
  const html = new HTMLUI();
  html.displayYears();
  //console.log(html);
});

//objects
function HTMLUI() {}

//display years
HTMLUI.prototype.displayYears = function () {
  //change Persian number to English number
  var
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
fixNumbers = function (str)
{
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};



  // max years
 const now = new Date().toLocaleDateString('fa-IR');
 let nowyear = now.slice(0,4);
 let max = fixNumbers(nowyear);
  //console.log(max);

  //min years
  let min = max -20 ;


  //access to the select tag
  let selectYear = document.querySelector('#year');

  //create a loop for making option tag
  for (let i = max; i >= min; i--) {
  //create option
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  //append
  selectYear.appendChild(option);

  }

  
 


  
};
