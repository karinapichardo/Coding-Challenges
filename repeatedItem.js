/* 
Create a function that takes two arguments (item, times). The first
argument (item) is the item that needs repeating while the second
argument (times) is the number of times the item is to be repeated.
Return the result in an array.
*/

function repeat(item, times) {
    var repeatedArr = [];
    for (var i = 0; i < times; i++) {
	repeatedArr.push(item);
    }
	return repeatedArr;
}

// testing function
console.log(repeat("javaScript", 3)) // --> ["javaScript", "javaScript", "javaScript"]
console.log(repeat(13, 5)) // --> [13, 13, 13, 13, 13]
console.log(repeat("8", 2)) // -->  ["8", "8"]
console.log(repeat("2 0 2 0", 1)) // --> ["2 0 2 0"]
console.log(repeat("karina and austin", 6)) // --> ["karina and austin", "karina and austin", "karina and austin", "karina and austin", "karina and austin", "karina and austin"]
console.log(repeat(0, 1)) // --> [0]
console.log(repeat(0, 0)) // --> []
console.log(repeat("z", 0)) //--> []
