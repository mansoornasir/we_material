// Default Arguments

function div(a, b)
{
    if(b == 0)
    {
        console.log("not possible");
        return 1;
    }
    else
        return a/b;
}
function div(a, b)
{
    b = b || 1;

    return a / b;
}

function div(a, b=1)
{
    return a /b;
}


svm(kernel="linear");

console.log(div(20));

// Arrow Funcitons

/*function sum(a, b)
{
    return a + b;
}

var sum = function(a, b)
{
    return a + b;
}

// function
var fun1 = ()
{
    return a + b;
}


var fun1 = () =>
{
    return a + b;
}

var fun1 = () =>
{
    a + b;
}

var fun1 = () =>  a + b;

var square = n => n * n;
var square = (n) => n * n;
var square = (n) =>
{
    n * n;
}
var square = (n) =>
{
    return n * n;
}
var square = function(n) 
{
    return n * n;
}
function square(n)
{
    return n * n;
}

console.log(square(5));

*/













/*var list = {
    "title":"C++",
    "author":"Jawad Ali",
    "price": 300,
    "date": "2019-12-1"
}

console.log(list.date);
console.log(list["date"]);

const {author, date, name, title} = list;

console.log(author);
*/

















/*function book(title, author)
{
    return {
        title:title,
        author: author
    }
    
}
function book(title, author)
{
    return 
    {
        title,
        author;
    }
}*/





















/*const list = ["a", "b", "c"];

const max_points = 90;

max_points++;

for(i in list)
{
    console.log(list[i]);
}*/