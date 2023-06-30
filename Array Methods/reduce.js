var numbers = [1, 2, 3, 2, 4, 2];

var counter = count(numbers, 2);
console.log(counter);

function count(array, searchElement) {
  //for...of
  // var count = 0;
  // for (const element of array) {
  //     if (element === searchElement ) {
  //         count++
  //     }
  // }
  // return count;

  return array.reduce((accumulator, current) => {
    var count = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + count;
  }, 0);
}
