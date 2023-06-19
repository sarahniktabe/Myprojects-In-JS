d = document.getElementById("img1").src = "/images/3.jpg";

(function () {
  var time = 0;
  var timeid = setInterval(change, 5000);
  function change() {
    document.getElementById("img1").src = "/images/4.jpg";
    clearInterval(timeid);
  }
})();
