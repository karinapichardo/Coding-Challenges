// Create a function that takes a string and returns a string with its letters in alphabetical order.

function Alphabet(str) {
  var arr = str.split('');
  return arr.sort().join('');
}

// testing function 
console.log(Alphabet("hello")) // --> "ehllo"
console.log(Alphabet("programming")) // --> "aggimmnoprr"
console.log(Alphabet("love")) // --> "elov"
console.log(Alphabet("greatness")) // --> "aeegnrsst"
console.log(Alphabet("javascript")) // --> "aacijprstv"