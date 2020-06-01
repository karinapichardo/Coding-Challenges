/* Create a function that takes an array of strings and numbers,
and returns an array of integers only. */

function filterArray(arr){
  return arr.filter(array => array === parseInt(array));
}

// testing function
console.log(filterArray([1, 2, 3, "Java", "Python", 4])) // --> [1, 2, 3, 4]
console.log(filterArray(["Programming", 1, "is", 0, -9, "Awesome"])) // --> [1, 0, -9]
console.log(filterArray(["Love", "it"])) // --> []
console.log(filterArray([1, 2, 3, 3.5 , "t", "f", 4 , 5.8 , 6])) // --> [1, 2, 3, 4 , 6]