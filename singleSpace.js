/* 
Given a string, write a function that returns the passed in string,
with all the double spaces converted to single spaces.
*/

function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}

// testing function
console.log(convertDoubleSpaceToSingle("I  love  computer  programming")) // --> "I love computer programming"
console.log(convertDoubleSpaceToSingle("string  with  double  spaces")) // --> "string with double spaces"
