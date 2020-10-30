/* Return the Kinetic Energy in Joules, given the mass and velocity. For the
purposes of this challenge, round answers to the nearest integer. */

function kineticEnergy(m, v) {
	return Math.round(0.5 * m * v ** 2);
}

console.log(kineticEnergy(60, 3)) // ➞ 270
console.log(kineticEnergy(45, 10)) // ➞ 2250
console.log(kineticEnergy(63.5, 7.35)) // ➞ 1715