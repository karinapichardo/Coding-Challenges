/* 
You are given 2 out of 3 angles in a triangle, in degrees.
Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).
*/

function missingAngle(angle1, angle2) {
	return (angle1 + angle2 === 90) ? 'right'
       : (angle1 + angle2 > 90) ? 'acute'
       : (angle1 + angle2 < 90) ? 'obtuse'
       : null;
}

// testing function
console.log(missingAngle(27, 59)) // --> obtuse
console.log(missingAngle(135, 11)) // --> acute
console.log(missingAngle(45, 45)) // --> right
console.log(missingAngle(45, 15)) // --> obtuse
console.log(missingAngle(31, 100)) // --> acute
console.log(missingAngle(35, 55)) // --> right