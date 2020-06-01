/* create a function that returns whether a string contains
the characters a and c (in that order) with any number of b characters
(including zero) between them. */

function asterisk(string) {
  var regex = RegExp('ab*c', 'g');
  return regex.test(string);
}

// testing function
console.log(asterisk("abccount")) //--> true
console.log(asterisk("abbbcount")) // --> true
console.log(asterisk("account")) // --> true
console.log(asterisk("bbbccount")) // --> false
console.log(asterisk("ccount")) // --> false
console.log(asterisk("abbount")) // --> false
