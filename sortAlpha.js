/* 
Write a function that returns the lexicographically first and 
lexicographically last rearrangements of a string. 

Output the results in the following manner:
firstAndLast(string) ➞ [first, last]
*/

function firstAndLast(str) {
	var sortedString = str.split('').sort().join('');
  var reversedString = sortedString.split('').reverse().join('');

  return [sortedString, reversedString];
}

// testing function
console.log(firstAndLast("austin")) // --> ['ainstu', 'utsnia']
console.log(firstAndLast("karina")) // --> ['aaiknr', 'rnkiaa']
console.log(firstAndLast("javascript")) // --> ['aacijprstv', 'vtsrpjicaa']
console.log(firstAndLast("programming")) // --> ['aggimmnoprr', 'rrponmmigga']