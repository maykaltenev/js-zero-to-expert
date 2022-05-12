// let counter = 0;
// function recurse() {
//     if (counter === 2) {
//         return 'done';
//     } else {
//         counter++;
//     }
//     console.log(counter)
//     return recurse();
// }
// console.log(recurse())


let counter = 0;
function recurse() {
    if (counter === 10) {
        return counter;
    } else {
        counter++;
    }
    return recurse();
}
let output = recurse();
console.log(output);

let string = ''
function repeater(char) {
    if (string.length === 5) {
        return string;
    } else {
        string += char;
    }
    return repeater(char);
}
let result = repeater('g');
console.log(result);


function factorial(num, product) {
    if (num <= 0) {
        return product;
    }
    return factorial(num - 1, product * num)
}
let resFac = factorial(4, 1);
console.log(resFac);

function getLength(array, length = 0) {
    // base case: exit function return length if length of array is 0
    if (array[0] === undefined) {
        return length
    }
    // increase length if length of array is not 0 
    length++;
    // call getLength again, and pass in length
    return getLength(array.slice(1), length)
    // return and result (length)
}