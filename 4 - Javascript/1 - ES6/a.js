// const name = "Jawad";

// console.log(`Hello '${name}'`);

// console.log("Hello \"" + name + "\"")

const students = [
    { name: "Dwight", dept: "Computer Science", start: 2012, end: 2016 },
    { name: "Kelly", dept: "Psychology", start: 2010, end: 2012 },
    { name: "Rayn", dept: "Computer Science", start: 2011, end: 2013 },
    { name: "Michal", dept: "Political Science", start: 2018, end: 2022 },
    { name: "Andy", dept: "Physics", start: 2016, end: 2020 },
    { name: "Jim", dept: "Physics", start: 2017, end: 2021 },
    { name: "Pam", dept: "Political Science", start: 2011, end: 2013 }
];

const ages = [33, 12, 54, 5, 18, 17, 13, 61, 25, 32, 44, 16, 15, 64, 34];

// for(var i=0;i<students.length;i++)
// {
//     console.log(students[i].dept);
// }

// for(var student of students)
// {
//     console.log(student.start);
// }

// students.forEach(function (student) {
//     if(student.dept === 'Physics')
//         console.log(student.name)
// })

// Higher Order Array Functions

// // Filter
// const data = students.filter(student => {
//     if(student.dept === 'Computer Science')
//     {
//         return true;
//     }
// })

// console.log(data);

// const data = ages.filter(age => 
// {
//     if(age > 40)
//         return true;
// });
// console.log(data)

// const above40 = ages.filter(age => (age > 40 ? true : false));

// console.log(above40);

// const data = ages.filter((age) => {
//     if(age > 40)
//     return age * 2;
// }).map((d) => {
//     return Math.sqrt(d);
// });

// console.log(data);

// const data = ages.sort((a, b) => {
//     if(a < b)
//         return 1;
//     else    
//         return -1;
// });

// const data = ages.sort((a, b) => (a < b) ? 1 : -1);

// console.log(data);

// const data = ages.sort((a, b) => {
//     return b - a;
// })

// const data = ages.sort((a,b) => (a - b ))

// console.log(data);

// var sum = 0;

// for(var j=0;j<ages.length;j++)
// {
//     sum = sum + ages[j];
// }

// const add = ages.reduce(function(sum, age) {
//     sum = sum + age;
//     return sum;
// }, 0);

// console.log(add);

// const sum = ages
//             .filter(age => age > 40 ? true : false)
//             .reduce((sum, a) => (sum+= a), 0);

// console.log(sum);

// var list1 = [1,2,4,5,65,6]
// var list2 = [8,8,9,9,0,...list1, 9,8]

// // var combine = list1.concat(list2);

// console.log(list2);

// function sum(a, b, c)
// {
//     return a + b + c;
// }

// var data = [30,40,50];

// console.log(sum(...data));

