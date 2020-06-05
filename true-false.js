/* 
Consider a && b:

a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true).
The && operator will only return true for true && true.

Make a function using the && operator.
*/

function and(a, b) {
    return (a === true && b === false) ? false
         : (a === true || a === false) ? a
	 : (b === true || b === false) ? b
         : null;
}

// testing my function
console.log(and(true, true)) // --> true
console.log(and(true, false)) // --> false
console.log(and(false, true)) // --> false
console.log(and(false, false)) // --> false
