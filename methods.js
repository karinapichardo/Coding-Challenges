/* 
Create a function that takes an array of numbers 
and return the first and last elements as a new array.
*/

function firstLast(arr) {
	var firstAndLast = [];
	var first = arr.shift();
	var last = arr.pop();
	firstAndLast.push(first, last);
	return firstAndLast;
}

// testing function
console.log(firstLast([5, 10, 15, 20, 25]))//, [5, 25])
console.log(firstLast(["JavaScript", 13, null, false, true])) //, ["edabit", true])
console.log(firstLast([undefined, 4, "6", "Python", null])) //, [undefined, null])
console.log(firstLast(["Java", "is", "really", "cool"]))//, ["hello", "com"])
console.log(firstLast([3, 2, 1]))//, [3, 1])
console.log(firstLast(["one", "two"]))//, ["one", "two"])
console.log(firstLast([false, false, true, false, false, true, false]))//, [false, false])