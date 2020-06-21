/*
Create a function that takes in year and months as input, 
then return what year it would be after n-months has elapsed.
*/

function afterNMonths(year, months) {
	if (year === undefined) {
		return 'year missing';
	} else if (months === undefined) {
    return 'month missing';
  } 
var monthsToYears = months / 12;
return Math.floor(year + monthsToYears);
}

// testing function
console.log(afterNMonths(2020, 24)) // --> 2022
console.log(afterNMonths(1832, 2)) // --> 1832
console.log(afterNMonths(1444, 60)) // --> 1449
console.log(afterNMonths(2020, undefined)) // --> "month missing"
console.log(afterNMonths(undefined, 2)) // --> "year missing"
console.log(afterNMonths(1444, 65)) // --> 1449