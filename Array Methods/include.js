let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let show = numbers.includes(2);
console.log(show);

function include(array, searchElement) {
  for (const element of array) {
    if (element === searchElement) {
      return true;
    }
  }

  return false;
}

console.log(include(numbers,4))
