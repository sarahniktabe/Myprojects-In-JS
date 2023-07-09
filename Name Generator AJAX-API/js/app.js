//addEventListener
document.querySelector("#generate-names").addEventListener("submit", loadName);

function loadName(e) {
  e.preventDefault();

  //read the value from the form
  let country = document.querySelector("#country").value;
  let gender = document.querySelector("#genre").value;

  //generate the url
  url = "https://api.namefake.com/";

  //check the country value

  if (country != "") {
    url += country + "/";
  } else {
    url += "random/";
  }

  //check the gender value
  if (gender != "") {
    url += gender + "/";
  } else {
    url += "random/";
  }
  console.log(url);

  //AJAx
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      let response = JSON.parse(this.response);
      let output =`
      <ul>
      <li>کشور: ${response.country}</li>
      <li>جنسیت: ${response.gender}</li>
      </ul>
      `
      document.querySelector("#result").innerHTML = output
    }
  };
  xhr.send();
}
