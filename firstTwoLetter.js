/* Write a function that stutters a word as if someone is struggling to read it. The first two letters
are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ? */


function stutter(word) {
  var firstTwo = word[0] + word[1] + "... ";
  return firstTwo + firstTwo + word + "?";
}

// testing function
console.log(stutter("incredible")) // ➞ "in... in... incredible?"
console.log(stutter("enthusiastic")) // ➞ "en... en... enthusiastic?"
console.log(stutter("outstanding") ) //➞ "ou... ou... outstanding?"