/* Write a function called "isEitherEvenAndLessThan9".
Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9. */

function isEitherEvenAndLessThan9(num1, num2) {
    return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}

// testing our function by calling it 
console.log(isEitherEvenAndLessThan9(2, 4)) // --> true;
console.log(isEitherEvenAndLessThan9(72, 2)) // --> false;
console.log(isEitherEvenAndLessThan9(4, 56)) // --> false;