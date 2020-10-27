// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(s) {
	return (s.length % 2 === 0) ? true : false;
}

console.log(oddOrEven("apples")) // ➞ true
console.log(oddOrEven("pears")) // ➞ false
console.log(oddOrEven("cherry")) // ➞ true