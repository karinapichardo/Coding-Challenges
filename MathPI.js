// Create a function that takes an angle in radians and converts it into degrees.

function toDegree(radian) {
	return Math.round(radian * 180 / Math.PI);
}

// testing function
console.log(toDegree(2 * Math.PI)) // --> 360
console.log(toDegree(Math.PI)) // --> 180
console.log(toDegree(Math.PI / 4)) // --> 45
console.log(toDegree(Math.PI / 3)) // --> 60