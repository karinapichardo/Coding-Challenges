/* 
Given an object, write a function that removes any properties whose values are odd numbers.
*/

function removeOddValues(obj) {
  for (values in obj) {
    if (obj[values] % 2 === 1) {
      delete obj[values];
    }
  }
}

// testing function to make sure it works properly
var obj = {
  a: 2,
  b: 3,
  c: 4
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }