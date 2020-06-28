// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
    if (str.length <= 2) {
	return str;
    } else {
	return str.substring(1, str.length - 1);
    }
}

// testing function
console.log(removeFirstLast("Aaustinn")) // --> "austin"
console.log(removeFirstLast("maybe")) // --> "ayb"
console.log(removeFirstLast("benefit")) // --> "enefi"
console.log(removeFirstLast("a")) // --> "a"
