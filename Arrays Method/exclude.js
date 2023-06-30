
var numbers = [1, 2, 3, 4];

console.log(except(numbers, [1,2]));

function except(array, excluded) {
  var output = [];
  for (const element of array) {
    if (!excluded.includes(element))
     output.push(element);
  }
  return output;
}

