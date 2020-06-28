/* Create a function that returns true if an input string contains 
only uppercase or only lowercase letters. */

function sameCase(str) {
	return str === str.toUpperCase() || str === str.toLowerCase();
}


// testing function
console.log(sameCase("hello")) // --> true
console.log(sameCase("HELLO")) // --> true
console.log(sameCase("Hello")) // --> false
console.log(sameCase("ketcHUp")) // --> false