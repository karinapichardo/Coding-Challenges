// Given an array, transform that array into a mirror.

function mirror(arr) {
   var mirrorArr = [];
   for (var i = 0; i < arr.length - 1; i++) {
       mirrorArr.push(arr[i]);
   }
   return mirrorArr.concat(arr.reverse());
}

// testing function 
console.log(mirror([1,2,3,4,5])) // --> [1,2,3,4,5,4,3,2,1]
console.log(mirror([0,2,4,6])) // --> [0,2,4,6,4,2,0]
console.log(mirror([1,2,2,3,3,4])) // --> [1,2,2,3,3,4,3,3,2,2,1]
