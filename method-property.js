/* 
Create a function that takes a string and returns the word count. The string will be a sentence.

Examples
countWords("Just an example here move along") ➞ 6
countWords("This is a test") ➞ 4
countWords("What an easy task, right") ➞ 5
*/

function countWords(str) {
  // creating an array with each word of a sentence and then getting its length
  return str.split(" ").length;
}

// testing my function by calling it
console.log((countWords("I love programming"))) // --> 3
console.log((countWords("JavaScript is so fun"))) // --> 4
console.log((countWords("What an easy task, right"))) //-- > 5
console.log((countWords("This is a test"))) // --> 4
console.log((countWords("this is the best day of my life"))) // --> 8
console.log((countWords("Bonjour comment ca va?"))) // --> 4


Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

Examples
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true
Notes
Remember to return either true or false. All arrays contain two positive numbers. If you're stuck, check Resources for a hint.

function checkSquareAndCube(arr) {
	var firstNum = arr[0];
	var secondNum = arr[1];
	
	return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}
Test.assertEquals(checkSquareAndCube([4, 8]), true)
Test.assertEquals(checkSquareAndCube([5, 12]), false)
Test.assertEquals(checkSquareAndCube([9, 27]), true)
Test.assertEquals(checkSquareAndCube([25, 120]), false)
Test.assertEquals(checkSquareAndCube([25, 125]), true)
Test.assertEquals(checkSquareAndCube([36, 215]), false)
Test.assertEquals(checkSquareAndCube([36, 217]), false)
Test.assertEquals(checkSquareAndCube([144, 1728]), true)
Test.assertEquals(checkSquareAndCube([1, 1]), true)
Test.assertEquals(checkSquareAndCube([676, 17576]), true)