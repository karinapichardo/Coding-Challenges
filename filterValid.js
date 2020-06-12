/* 
Create a function that takes an array of strings and 
returns the words that are exactly four letters.
*/

function isFourLetters(arr) {
  return arr.filter(x => x.length === 4);
}

// testing function
console.log(isFourLetters(["Ryan", "Austin", "Karina", "Matt"])) // --> ["Ryan", "Matt"]
console.log(isFourLetters(["Tomato", "Potato", "Pair"])) // --> ["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])) // --> ["Bear"])
console.log(isFourLetters(["Red", "Blue", "Green", "Pink"])) // --> ["Blue", "Pink"]
console.log(isFourLetters(["is", "up", "two", "elephant"])) // --> []
console.log(isFourLetters([])) // --> []
console.log(isFourLetters(["jazz", "quiz", "jump"])) // --> ["jazz", "quiz", "jump"]
console.log(isFourLetters([""])) // --> []
console.log(isFourLetters(["Broccoli", "Carrot", "Spinach"])) // --> []