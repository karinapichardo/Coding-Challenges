// Write a function that takes in an object and removes any properties whose values are arrays.

function removeArrayValues(obj) {
  for(var key in obj) {
    if(Array.isArray(obj[key]) === true) {
      delete obj[key];
    }
  }
  return obj[key];
}


// testing my function to make sure it works 

var obj = {
  a: [1, 3, 4],
  b: 'I LOVE JS',
  c: ['hi', 'there']
}


removeArrayValues(obj);
console.log(obj); // --> { b: 'I LOVE JS' }
