/* 
Given a number and an object, write a function that removes any properties
on the given object whose values are strings longer than the given number.
*/

function removeStringValuesLongerThan(num, obj) {
  for (keys in obj) {
    if (typeof obj[keys] === 'string' && obj[keys].length > num) {
      delete obj[keys];
    }
  }
}

// testing my function to make sure it works properly

var obj = {
  favoriteCity: 'New York City',
  yearsLiving: 20,
  location: 'New York'
};

removeStringValuesLongerThan(10, obj);
console.log(obj); // { yearsLiving: 20, location: 'New York' }