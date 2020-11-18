// npm init
// npm install
// npm install -g
// package.json file
// npm install -D
// delete node_modules folder
// exporing objects/classes
// export, require, module, __filename, __dirname is available

// const person = require('./person');

// console.log(person)

const Person = require('./person');

const p1 = new Person('Mansoor', 30);

console.log(p1.greeting())
