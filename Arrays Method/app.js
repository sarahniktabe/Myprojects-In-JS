var numbers = arrayBetweenRange(-10, 5);
function arrayBetweenRange(min, max) {
  var output = [];
  for (let i = min; i < max; i++) {
    output.push(i);
  }
  return output;
}

console.log(numbers);
