let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(movingElements(num, 3, 3));

function movingElements(array, index, offset) {
  let position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset");
  } else {
    var output = [...array];
    var element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
  }
}
