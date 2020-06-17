/* 
Create a function that accepts a string (of a person's first and last name) and 
returns a string with the first and last name swapped.
*/

function nameShuffle(str) {
    return str.split(' ').reverse().join(' ');
}

// testing function
console.log(nameShuffle("Karina Austin")) // --> "Austin Karina"
console.log(nameShuffle("Rosie O'Donnel")) // --> ,"O'Donnel Rosie"
console.log(nameShuffle("Seymour Butts")) // --> "Butts Seymour"
console.log(nameShuffle("Ebony Greene")) // --> "Greene Ebony"
console.log(nameShuffle("Ken Kennedy")) // --> "Kennedy Ken"
console.log(nameShuffle("Allison Gonzalez")) // --> "Gonzalez Allison"
console.log(nameShuffle("Albert Frazier")) // --> "Frazier Albert"
console.log(nameShuffle("Eloise Hopkins")) // --> "Hopkins Eloise"
console.log(nameShuffle("Donnie Welch")) // --> "Welch Donnie"
console.log(nameShuffle("Vernon Thomas")) // --> "Thomas Vernon"