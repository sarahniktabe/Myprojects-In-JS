document.getElementById("get-btn").addEventListener("click", getData);

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  //   xhr.responseType = "json";
  //   xhr.onload = function () {
  //     if (this.status == 200) {
  //       document.getElementById("lblShowData").innerHTML = this.responseText;
  //     }
  //   };

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("lblShowData").innerHTML = this.responseText;
    }
  };
  xhr.send();
}
