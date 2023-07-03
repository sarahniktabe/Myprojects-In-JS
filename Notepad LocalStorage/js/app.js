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
  addNoteToLocalStorage(note);
}

//remove note from list
function removeNote(e) {
  if (e.target.classList.contains("remove-note")) {
    //remove li with parentElement
    e.target.parentElement.remove();
  }
}

// adding note to the local storage
function addNoteToLocalStorage(x) {
  var x = getNotesFromLocalStorage();
  // add new notes to array
  x.push(note);
  // add new notes Array to the localStorage
  localStorage.setItem("notes", JSON.stringify(x));
}

// get previous notes from localStorage
function getNotesFromLocalStorage() {
  let notes;
  let getFromLS = localStorage.getItem("notes");
  if (getFromLS === null) {
    notes = [];
  } else {
    notes = JSON.parse(getFromLS);
  }
  return notes;
}
