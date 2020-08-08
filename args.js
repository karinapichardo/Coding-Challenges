// Create a function that returns the total number of parameters passed in. 

function numberArgs() {
	return arguments.length;
}

// testing function
console.log(numberArgs("a", "b", "c")) // ➞ 3
console.log(numberArgs(10, 20, 30, 40, 50)) // ➞ 5
console.log(numberArgs("x", "y")) // ➞ 2
console.log(numberArgs()) // ➞ 0