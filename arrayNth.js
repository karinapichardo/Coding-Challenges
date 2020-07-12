/* Given an array and an index, create a function that returns an array
with all the elements but the nth. */

function getAllElementsButNth(array, n) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if(i === n) {
      continue;
    } else {
      result.push(array[i]);
    }
 }
 return result;
}

// testing function
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']