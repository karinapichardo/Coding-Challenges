/* A number added with its additive inverse equals zero.
Create a function that returns an array of additive inverses. */

function additiveInverse(arr) {
	return arr.map(x => x * -1);
}

// testing function
console.log(additiveInverse([5, -7, 8, 3])) // --> [-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1])) // --> [-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35])) // --> [5, 25, -35]