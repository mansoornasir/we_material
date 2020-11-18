const url = require('url');

const link = new URL('https://www.google.com.pk?query=abc');

console.log(link.href)

console.log(link.host)// also hostname

console.log(link.pathname)

console.log(link.search)

console.log(link.searchParams)
link.searchParams.append('id', 123)
console.log(link.searchParams)

link.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))