/* Create a function that takes a string and returns true or false, 
depending on whether the characters are in order or not. */

function isInOrder(str) {
  return str.split('').sort().join('') === str;
}

// testing function
console.log(isInOrder("abc")) // --> true
console.log(isInOrder("javascript")) // --> false
console.log(isInOrder("123")) // --> true
console.log(isInOrder("xyzz")) // --> true