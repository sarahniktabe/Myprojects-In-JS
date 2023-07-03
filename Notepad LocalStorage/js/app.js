//eventListeners
var fn = document.querySelector("#form");
fn.addEventListener("submit", newNote);
var note = document.querySelector("#note");
var noteList = document.querySelector("#note-list");
document.querySelector("#note-list").addEventListener("click", removeNote);

//Functions
function newNote(e) {
  e.preventDefault();

  //remove btn
  const removeBtn = document.createElement("a");
  removeBtn.innerText = "X";
  removeBtn.classList = "remove-note";

  // add to notelist
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(note.Value));
  li.appendChild(removeBtn);
  noteList.appendChild(li);
  console.log(note.Value);
  //note.Value = "";
}

function removeNote(e) {
  if(e.target.classList.contains('remove-note')){
    //remove li with parentElement
    e.target.parentElement.remove()
  }
}
