/* 
Create a function that filters out an array to include 
numbers who only have a certain number of digits. 
*/

function filterDigitLength(arr, num) {
  return arr.filter(x => x.toString().length === num);
}

// testing function
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) // --> [232, 555]
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) // --> [2, 7, 8, 9]
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) // --> []
console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2)) // --> [99]
