/* 
Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible.
Here are the different types of shots he could make:

He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles.
*/

function rogerShots(arr) {
   var correctBang = [];
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] === "Bang!" || arr[i] === "BangBang!") {
	  correctBang.push(arr[i]);
       }
   }
   return correctBang.length * 0.5;
}

// testing function 
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])) // --> 3
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])) // --> 2.5
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"])) // --> 2
console.log(rogerShots(["BangBang!", "BangBang!", "BangBang!"])) // --> 1.5
console.log(rogerShots(["Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])) // --> 3
console.log(rogerShots(["BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!"])) // --> 2
