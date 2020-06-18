/* 
Write a function that takes an integer and 
returns a string with the given number of "a"s in Edabit.
*/

function howManyTimes(num) {
  var repeatedA = 'a';
  return 'Ed' + repeatedA.repeat(num) + 'bit';
}


// testing function
console.log(howManyTimes(5)) // --> "Edaaaaabit"
console.log(howManyTimes(0)) // --> "Edbit"
console.log(howManyTimes(12)) // --> "Edaaaaaaaaaaaabit"
