/*
Create a function that returns the next element in an arithmetic
sequence. In an arithmetic sequence, each element is formed by adding
the same constant to the previous element.
*/

function nextElement(arr) {
  var lastElement = arr.pop();
  var secondLast = arr.slice(-1);
  return (lastElement - secondLast) + lastElement;
}

// testing function
console.log(nextElement([3, 5, 7, 9])) // --> 11
console.log(nextElement([-5, -6, -7])) // --> -8
console.log(nextElement([2, 2, 2, 2, 2])) // --> 2