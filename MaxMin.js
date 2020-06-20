/* 
Create a function that takes an array and returns the difference
between the biggest and smallest numbers.
*/

function diffMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr)
}

// testing function
console.log(diffMaxMin([10, 4, 1, 2, 8, 91])) // --> 90
console.log(diffMaxMin([-70, 43, 34, 54, 22])) // --> 124