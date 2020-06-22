/* Create a function that takes in an initial word and filters out an
array which contains words that start with the same letters as the initial word. */

function dictionary(initial, words) {
   return words.filter(x => x.startsWith(initial));
}

// testing function
console.log(dictionary("bu", ["button", "breakfast", "border"])) // --> ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])) // --> ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])) // --> []
