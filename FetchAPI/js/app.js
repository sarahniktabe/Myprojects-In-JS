document.querySelector("#button1").addEventListener("click", loadData);
document.querySelector("#button2").addEventListener("click", loadJSON);
document.querySelector("#button3").addEventListener("click", loadAPI);

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
      });
      document.querySelector("#result").innerHTML = html;
    });
}

function loadAPI() {
  fetch("https://picsum.photos/list")
    .then((response) => response.json())
    .then((images) => {
      let html = "";
      images.forEach((img) => {
        html += `
            <li>
                <a href="${img.post_url}">show the image</a>
            </li>
            
            `;
      });
      document.querySelector("#result").innerHTML = html;
    });

}
