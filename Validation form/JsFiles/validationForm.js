function validationphone() {
  var phoneNumber = document.forms["infromations"]["num"].value;
  if (phoneNumber == "" || x < 11) {
    lbl = document.getElementById("emptynum").innerHTML =
      "You should enter your phone number.";
    return false;
  } else {
    return true;
  }
}
function validationcode() {
  var nationalCode = document.getElementById("ncode").value;
  if (nationalCode == "") {
    lbl2 = document.getElementById("emptyncode").innerHTML =
      "You should enter your national code.";
    return false;
  } else {
    return true;
  }
}
