/* recreate the following function using minimal code:

if (x > 0) {
		return "positive"
	} else if (x < 0) {
		return "negative"
	} else {
		return true
	}
}
*/

function equilibrium (x) {
	return (x > 0) ? 'positive' 
	     : (x < 0) ? 'negative'
	     : true;
}

console.log(equilibrium(0.000)) // true
console.log(equilibrium(3)) // positive
console.log(equilibrium(-66)) // negative