var path = require('path');

link = 'D:\\xampp\\htdocs\\we\\nodejs\\logger.js';
//basename returns the file name
var filename = path.basename(link);
console.log(filename)

// ; for windows : for Unix
console.log(path.delimiter)

// gives directory name
console.log(path.dirname(link));

// gives extension of the file
console.log(path.extname(filename))

var obj = {dir: 'D:\\xampp\\htdocs\\we\\nodejs', base: 'logger.js'}

var p = path.format(obj);

console.log(p)