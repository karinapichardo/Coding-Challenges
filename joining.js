/* Write a function that returns the string "something"
joined with a space and the given parameter a */

function giveMeSomething(a) {
	return 'something ' + a;
}

// testing function
console.log(giveMeSomething("is better than nothing")) // ➞ "something is better than nothing"
console.log(giveMeSomething("is cooking")) // ➞ "something is cooking"
console.log(giveMeSomething("something")) // ➞ "something something"