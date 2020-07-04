/* 
Create a function that takes date in the format 
yyyy/mm/dd as an input and returns "Bonfire toffee" 
if the date is October 31, else return "toffee".
*/

function halloween(dt) {
   if (dt.getMonth() === 9 && dt.getDate() === 31) {
     return 'Bonfire toffee';
   } else {
     return 'toffee';
   }
}

// testing function
console.log(halloween(new Date("2013/10/31"))) // --> "Bonfire toffee"
console.log(halloween(new Date("2012/07/31"))) // --> "toffee"
console.log(halloween(new Date("2011/10/12"))) // --> "toffee"
console.log(halloween(new Date("2008/10/11"))) // --> "toffee"
