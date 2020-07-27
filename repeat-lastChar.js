/* Create a function which makes the last character of 
a string repeat n number of times. */

function modifyLast(str, n) {
	var lastChar = str.slice(- 1);
    return str + lastChar.repeat(n - 1);
}

// testing function
console.log(modifyLast("Hello", 3)) // --> "Hellooo"
console.log(modifyLast("hey", 6)) // --> "heyyyyyy"
console.log(modifyLast("excuse me what?", 5)) // --> "excuse me what?????"