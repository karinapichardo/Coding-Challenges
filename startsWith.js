/* You are given an array with random words but your program doesn't accept words
that begin with the capital letter "C". Remove the unaccepted words and return the new array. */

function acceptedWords(arr) {
	return arr.filter(x => x.startsWith('C') === false);
}

// testing function
console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"])) // -- > ["Worms", "Bugs", "Beans"]
console.log(acceptedWords(["Ducks", "Bears",  "Cats"])) // --> ["Ducks", "Bears"]
console.log(acceptedWords(["cars", "trucks", "planes"])) // --> ["cars", "trucks", "planes"]