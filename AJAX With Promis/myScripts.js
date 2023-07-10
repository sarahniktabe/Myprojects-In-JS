var getBtn = document.getElementById("#get-btn");
//var postBtn = document.getElementById("#post-btn");

const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
   xhr.responseType = "json";
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject("error");
    };
    xhr.send();
  });
  return Promise;
};

let getData = () => {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      //document.getElementById("showData").innerHTML = res;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//const postData = () => {};

getBtn.addEventListener("click", getData);
//postBtn.addEventListener("click", postData);
