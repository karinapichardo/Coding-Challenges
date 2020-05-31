/* 
Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups.
Create a function that takes n cups bought and
return as an integer the total number of cups I would get.
*/

function totalCups(n) {
  var totalCupsPlusFree = (n / 6) + n;
  return Math.floor(totalCupsPlusFree);
}

// testing function 
console.log(totalCups(6)) // --> 7
console.log(totalCups(3)) // --> 3
console.log(totalCups(7)) // --> 8
console.log(totalCups(12)) // --> 14
console.log(totalCups(213)) // --> 248
console.log(totalCups(16)) // --> 18
