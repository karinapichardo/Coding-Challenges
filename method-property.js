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