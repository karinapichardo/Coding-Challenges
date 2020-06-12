/* A leap year must either be divisible by 400 
or divisible by 4 and not 100.
Given a year you must implement a function
that returns true if it's a leap year, or false if it's not. */

function isLeap(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// testing function 
console.log(isLeap(2020)) // --> true
console.log(isLeap(1800)) // --> false
console.log(isLeap(2000)) // --> true
console.log(isLeap(2019)) // --> false
console.log(isLeap(1452)) // --> true
console.log(isLeap(1998)) // --> false
console.log(isLeap(1904)) // --> true
console.log(isLeap(1985)) // --> false
console.log(isLeap(2048)) // --> true
console.log(isLeap(1600)) // --> true
