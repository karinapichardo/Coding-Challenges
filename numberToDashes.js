/* 
Create a function that takes a number (from 1 - 60) 
and returns a corresponding string of hyphens.
*/

function Go(num) {
   var hyphenString = "-";
   return hyphenString.repeat(num);
}

// testing function
console.log(Go(1)) // --> "-"
console.log(Go(5)) // --> "-----"
console.log(Go(3)) // --> "---"
console.log(Go(12)) // --> "------------"
