var input = document.getElementById("userInput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// for validation
function inputlength() {
  return input.value.length;
}

function creatListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value="";


  function crossList() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossList);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputlength() > 0) {
    creatListElement();
  }
}

function addListAfterClickKeyPress(event) {
  if (inputlength() > 0 && event.which === 13) {
    creatListElement();
  }
}


enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterClickKeyPress);
