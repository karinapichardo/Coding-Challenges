/* Create a function that takes an argument of any data type and
returns 1 if it's truthy and 0 if it's falsy. */

function isTruthy(input) {
	return input ? 1 : 0
}

// testing function
console.log(isTruthy(0)) // --> 0
console.log(isTruthy(false)) // --> 0
console.log(isTruthy("")) // --> 0
console.log(isTruthy("false")) // --> 1