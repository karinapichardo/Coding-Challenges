// Write a function that maps files to their extension names.

function getExtension(arr) {
	return arr.map(x => x.split('.').pop());
}

// testing code
console.log(getExtension(["code.html", "code.css"])) // --> ["html", "css"]
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])) // --> ["jpg", "pdf", "mp3"]
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])) // --> ["rb", "cpp", "py", "js"]