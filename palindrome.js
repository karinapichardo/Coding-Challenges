/* 
A palindrome is a word that is identical forward and backwards.

examples:
mom
racecar
kayak

Given a word, create a function that checks whether it is a palindrome.
*/

function checkPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

// testing function
console.log(checkPalindrome('mom')) // --> true
console.log(checkPalindrome('scary')) // --> false
console.log(checkPalindrome('reviver')) // --> true
console.log(checkPalindrome('stressed')) // --> false
console.log(checkPalindrome('good')) // --> false
console.log(checkPalindrome('refer')) // --> true
console.log(checkPalindrome('something')) // --> false
console.log(checkPalindrome('redder')) // --> true
console.log(checkPalindrome('civic')) // --> true