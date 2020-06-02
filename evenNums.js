// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
  var evenNums = [];
  for (var i = 1; i <= num; i++) {
	if (i % 2 === 0) {
	  evenNums.push(i);
    }
}
   return evenNums;
}

// testing function
console.log(findEvenNums(1)) // --> []
console.log(findEvenNums(9)) // --> [2, 4 ,6, 8]
console.log(findEvenNums(11)) // --> [2, 4 ,6, 8, 10]
console.log(findEvenNums(8)) // --> [2, 4, 6, 8]
console.log(findEvenNums(4)) // --> [2, 4]
console.log(findEvenNums(2)) // --> [2]
