/* 
Write a function that returns true if two arrays have the same
number of unique elements, and false otherwise.
*/

function same(a1, a2) {
  var uniqueNums1 = [...new Set(a1)];
  var uniqueNums2 = [...new Set(a2)];
  return uniqueNums1.length === uniqueNums2.length;
}

// testing function
console.log(same([1, 3, 4, 4, 4], [2, 5, 7])) // --> true
console.log(same([9, 8, 7, 6], [4, 4, 3, 1])) // --> false
console.log(same([2], [3, 3, 3, 3, 3])) // --> true
console.log(same([5, 9, 9], [9, 5])) // --> true
console.log(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4])) // --> true