/* 
Create a function that takes a number as an argument 
and returns an array of numbers counting down from this number to zero.
*/

function countdown(start) {
	var arrCountDown = [];
	for (var i = 0; i <= start; i++) {
		arrCountDown.push(i);
	}
	return arrCountDown.reverse();
}

// testing function
console.log(countdown(3)) // --> [3, 2, 1, 0]
console.log(countdown(20)) // --> [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(countdown(1)) // --> [1, 0]
console.log(countdown(0)) // --> [0]