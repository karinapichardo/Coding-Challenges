/* 
Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".
*/

function greetPeople(names) {
   return names.map(x => 'Hello' + ' ' + x).join(', ');
}

// testing function
console.log(greetPeople(["Austin"])) // --> "Hello Austin"
console.log(greetPeople(["Karina", "Mom", "Dad", "Derek"])) // --> "Hello Karina, Hello Mom, Hello Dad, Hello Derek"
console.log(greetPeople([])) // --> ""