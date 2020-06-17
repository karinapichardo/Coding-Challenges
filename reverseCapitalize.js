/* Create a function that takes a string of lowercase characters and returns that string reversed and in upper case. */

function reverseCapitalize(str) {
  return str.split('').reverse().join('').toUpperCase();
}

// testing function
console.log(reverseCapitalize("abc")) // --> "CBA"
console.log(reverseCapitalize("hellothere")) // --> "EREHTOLLEH"
console.log(reverseCapitalize("input")) // --> "TUPNI"
console.log(reverseCapitalize("austin")) // --> "NITSUA"
