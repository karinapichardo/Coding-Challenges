// Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(n) {
  return Math.ceil(n / 5);
}

// testing function
console.log(carsNeeded(5)) // --> 1
console.log(carsNeeded(11)) // --> 3
console.log(carsNeeded(0)) // --> 0
console.log(carsNeeded(4)) // --> 1
console.log(carsNeeded(6)) // --> 2
console.log(carsNeeded(18)) // --> 4