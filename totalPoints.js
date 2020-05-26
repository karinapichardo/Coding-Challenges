/* 
Create a function that takes the number of wins, draws and losses and
calculates the number of points a football team has obtained so far. 
A win receives 3 points, a draw 1 point and a loss 0 points. 
*/

function footballPoints(wins, draws, losses) {
  var totalPoints = (wins * 3) + (draws * 1) + (losses * 0);
  return totalPoints;
}

// testing function by calling it to make sure it works properly 
console.log(footballPoints(1, 2, 3)) // --> 5
console.log(footballPoints(5, 5, 5)) // --> 20
console.log(footballPoints(1, 0, 0)) //--> 3
console.log(footballPoints(0, 7, 0)) // --> 7
console.log(footballPoints(0, 0, 15)) // --> 0
