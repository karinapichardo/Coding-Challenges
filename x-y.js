// Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

function convertCartesian(x, y) {
  var newArr = [];
  for (var i = 0; i < x.length; i++) {
    newArr.push([x[i], y[i]]);
}
return newArr;
}

// testing code
console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])) // --> [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
console.log(convertCartesian([9, 8, 3], [1, 1, 1])) // --> [[9, 1], [8, 1], [3, 1]]
