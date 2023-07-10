document.querySelector("#button1").addEventListener("click", loadData);
document.querySelector("#button2").addEventListener("click", loadJSON);

function loadData() {
  fetch("data.txt")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#result").innerHTML = data;
    });
}

function loadJSON() {
  fetch("employees.json")
    .then((response) => response.json())
    .then((json) => {
      //console.log(json)
      let html = "";
      json.forEach((person) => {
        html += `
           <li>
           ${person.name} - ${person.job}
           </li>
           
           `;
        document.querySelector("#result").innerHTML = html;
      });
    });
}
