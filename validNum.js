/* 
Create a function which validates whether a given number exists,
and could represent a real life quantity. Inputs will be given as a string.
*/

function validStrNumber(n) {
	return !isNaN(n);
}

// testing my function to make sure it works propely
console.log(validStrNumber("3.2")) // --> true
console.log(validStrNumber("324")) // --> true
console.log(validStrNumber("54..4")) // --> false
console.log(validStrNumber("number")) // --> false
console.log(validStrNumber(".5")) // --> true
console.log(validStrNumber("03")) // --> true
console.log(validStrNumber("3.e")) // --> false
console.log(validStrNumber(".42.3")) // --> false
console.log(validStrNumber("0000000")) // --> true
