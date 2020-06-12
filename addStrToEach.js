// create a function that adds a string ending to each member in an array.

function addEnding(arr, ending) {
  return arr.map(x => x.concat(ending));
}

// testing function
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")) // --> ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding(["new", "pander", "scoop"], "er")) // --> ["newer", "panderer", "scooper"]
console.log(addEnding(["bend", "sharpen", "mean"], "ing")) // --> ["bending", "sharpening", "meaning"]
