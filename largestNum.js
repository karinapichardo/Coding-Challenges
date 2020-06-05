/*
Create a function that takes an array of numbers. 
Return the largest number in the array.
*/

function findLargestNum(arr) {
	return Math.max.apply(null, arr);
}

//testing function
console.log(findLargestNum([4, 5, 1, 3])) // --> 5
console.log(findLargestNum([300, 200, 600, 150])) // --> 600
console.log(findLargestNum([1000, 1001, 857, 1])) // --> 1001
console.log(findLargestNum([0, 1, 0, 0, 1])) // --> 1