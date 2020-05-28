/* Create a function that takes a number (from 1 to 12) 
and returns its corresponding month name as a string.
*/

function monthName(num) {
	var arrayOfMonths = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return arrayOfMonths[num - 1];
}

// testing function

console.log(monthName(1)) // --> January
console.log(monthName(2)) // --> February
console.log(monthName(3)) // --> March
console.log(monthName(4)) // --> April
console.log(monthName(5)) // --> May
console.log(monthName(6)) // --> June
console.log(monthName(7)) // --> July
console.log(monthName(8)) // --> August
console.log(monthName(9)) // --> September
console.log(monthName(10)) // --> October
console.log(monthName(11)) // --> November
console.log(monthName(12)) // --> December