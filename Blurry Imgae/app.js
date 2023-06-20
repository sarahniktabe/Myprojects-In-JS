const loadtxt = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let int = setInterval(blurring, 30);
let load = 0

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadtxt.innerText = `${load}%`;
  loadtxt.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//I use the scale function from this page: :)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
};
 