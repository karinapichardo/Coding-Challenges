/* Write a function that checks if two numbers are:

- Smaller than 0
- Greater than 0
- Exactly 0
*/

function both(n1, n2) {
  return Math.sign(n1) === Math.sign(n2);
}

// testing function 
console.log(both(6, 2)) // --> true
console.log(both(0, 0)) // --> true
console.log(both(-1, 2)) // --> false
console.log(both(0, 2)) // --> false
console.log(both(888, -7346)) // --> false