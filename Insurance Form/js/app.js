//variables

//functions

function addEvenetListener() {
  document.addEventListener("DOMContentLoaded", () => {
    //display the <options>
    const html = new HTMLUI();
    console.log(HTMLUI);
    html.displayYears();
  });
}

//objects
function HTMLUI() {}

//display
HTMLUI.prototype.displayYears = function () {
  // max years
  const year = new Date().getFullYear();

  //min years
};
