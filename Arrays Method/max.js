var numbers = [1, 2, 3, 4, 8, 10];

var maximum = getMax(numbers)
console.log(maximum);

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }
    // var max = array[0];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i]
    //     }
    // }
    // return max;
    return array.reduce((accumulator , current) => (current > accumulator) ? current : accumulator)
}