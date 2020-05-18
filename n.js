/*
Create a function where given the number n, return the sum of all square numbers up to and including n.

example:
squaresSum(3) ➞ 14
1² + 2² + 3² =
1 + 4 + 9 =
14 
*/

function squaresSum(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
	total += i ** 2;
  }
  return total;
}

// testing my function
console.log((squaresSum(1))) // --> 1
console.log((squaresSum(2))) // --> 5
console.log((squaresSum(3))) // --> 14
console.log((squaresSum(10))) // --> 385
console.log((squaresSum(11))) // --> 506
console.log((squaresSum(23))) // --> 4324
console.log((squaresSum(30))) // --> 9455
console.log((squaresSum(43))) // --> 27434
console.log((squaresSum(65))) // --> 93665
console.log((squaresSum(72))) // --> 127020
console.log((squaresSum(100))) // --> 338350
