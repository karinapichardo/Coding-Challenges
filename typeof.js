// Write a function that takes in an object and removes any properties whose values are numbers.

function removeNumberValues(obj) {

  for (value in obj) {
    if(typeof obj[value] === 'number'){
      delete obj[value];
  }
}
return obj[value];
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }