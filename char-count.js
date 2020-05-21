/* 
Given a string input and a character,
write a functioon that returns the number of occurrences 
of a given character in the given string.
*/

function countCharacter(str, char) {
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++
    }
  }
  return count;
}

// testing function to make sure my code works 
console.log(countCharacter('I am in love with computer programming', 'a')) // --> 2
console.log(countCharacter('I love what I do for work', 'o')) // --> 4
console.log(countCharacter('It is only a dream until you do it', 't')) // --> 3
