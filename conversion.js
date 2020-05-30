/* 
Implement a function that returns the given distance kilometers converted into miles.
Round the result up to the fifth decimal digit.
*/

function kmtomiles(kilometers) {
  var miles = +Number.parseFloat(kilometers * 0.621371).toFixed(5);
  return miles;
}

// testing function 

console.log(kmtomiles(2)) // --> 1.24274
console.log(kmtomiles(6)) // --> 3.72823
console.log(kmtomiles(8)) // --> 4.97097
