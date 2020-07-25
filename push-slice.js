// Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

function addToBackOfNew(arr, element) {
  var copy = arr.slice();
  copy.push(element);
  return copy; 
}

// testing code

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]