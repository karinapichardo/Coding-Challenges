/*
Create a function which validates whether a bridge is safe to walk on 
(i.e. has no gaps in it to fall through).

Examples:
isSafeBridge("####") ➞ true
isSafeBridge("## ####") ➞ false
isSafeBridge("#") ➞ true
*/

function isSafeBridge(str){
  return !str.includes(' ');
}

// testing function
console.log(isSafeBridge("####")) // --> true
console.log(isSafeBridge("## ####")) // --> false
console.log(isSafeBridge("#")) // --> true
console.log(isSafeBridge("# #")) // --> false
