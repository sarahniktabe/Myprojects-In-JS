document.querySelector("#button1").addEventListener("click", loadData);

function loadData() {
  fetch("data.txt")
  .then((response) => response.text())
  .then((data)=>{
    document.querySelector("#result").innerHTML = data;
  })
}
