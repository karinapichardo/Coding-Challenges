/* Create a function that returns an array of booleans
from a given number by iterating through the number one
digit at a time and appending true into the array if the
digit is 1 and false otherwise.
*/
function integerBoolean(n) {
   var booleanArr = [];

   for (var i = 0; i < n.length; i++) {
       if (n[i] === '1') {
	   booleanArr.push(true);
       } else if (n[i] === '0') {
     booleanArr.push(false);
  }
}
  return booleanArr;
}

console.log(integerBoolean("100101")) // --> [true, false, false, true, false, true]
console.log(integerBoolean("10")) // --> [true, false]
console.log(integerBoolean("001")) // --> [false, false, true]
console.log(integerBoolean("")) // --> []
console.log(integerBoolean("111")) // --> [true, true, true]
console.log(integerBoolean("000")) // --> [false, false, false]
console.log(integerBoolean("10010110")) // --> [true, false, false, true, false, true, true, false]
