/*
Create a function that takes in an array of numbers and
returns a count representing the number of elements whose value is greater than 40. 
If there are no values above 40, then the function should return 0.
*/

function getElementsAbove40(numbers) {
  var count = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 40) {
      count++;
    }
  }
  return count;
}

// testing function to make sure my code works properly
console.log(getElementsAbove40([1, 42, 5, 314, 2, 89])) // --> 3
console.log(getElementsAbove40([1, 4, 3, 2, 6])) // --> 0
console.log(getElementsAbove40([300, 25, 28, 92, 9])) // --> 2