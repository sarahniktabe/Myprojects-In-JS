function move() {
  var element = document.getElementById("animate");
  var position = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++;
      element.style.top = position + "px";
      element.style.left = position + "px";
    }
  }
}

function moveback() {
  var element2 = document.getElementById("animate");
  var position2 = 350;
  var id2 = setInterval(frame2, 5);
  function frame2() {
    if (position2 == 0) {
      clearInterval(id2);
    } else {
      position2++;
      element2.style.down = position2 + "px";
      element2.style.right = position2 + "px";
    }
  }
}
