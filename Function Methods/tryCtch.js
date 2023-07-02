var numbers = [1, 2, 3, 2, 4, 2];
try {
  var counter = count(numbers, 2);
  console.log(counter);
} catch (error) {
  alert(error);
}
function count(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new error("please enter arrays");
  }
  return array.reduce((accumulator, current) => {
    var count = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + count;
  }, 0);
}
