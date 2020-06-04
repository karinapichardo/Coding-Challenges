/* 
Booleans can also be written as integers, where 1 = True and 0 = False. 
Make a function that returns the opposite of the boolean given.
*/

function flipBool(b) {
    return (b === true || b === 1) ? 0
         : (b === false || b === 0) ? 1
         : null;
}

// testing function
console.log(flipBool(1)) // --> 0
console.log(flipBool(true)) // --> 0
console.log(flipBool(0)) // --> 1
console.log(flipBool(false)) // --> 1