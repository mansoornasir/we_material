const students = [
    {name: "Dwight", dept: "Computer Science", start: 2012, end: 2016},
    {name: "Kelly", dept: "Psychology", start: 2010, end: 2012},
    {name: "Rayn", dept: "Computer Science", start: 2011, end: 2013},
    {name: "Michal", dept: "Political Science", start: 2018, end: 2022},
    {name: "Andy", dept: "Physics", start: 2016, end: 2020},
    {name: "Jim", dept: "Physics", start: 2017, end: 2021},
    {name: "Pam", dept: "Political Science", start: 2011, end: 2013}    
];

const ages = [33, 12, 54, 5, 18, 17, 13, 61, 25, 32, 44, 16, 15, 64, 34];

// for(let i in students)
// {
//     console.log(students[i].name);
// }

// students.forEach(student => console.log(student.name));
// count = 0;
// agesAbove40 = [];
// for(i in ages)
// {
//     if(ages[i] > 40)
//     {
//         count++;
//         agesAbove40.push(ages[i]);
//         console.log(ages[i]);
//     }
// }
// console.log("Total ages above than 40 is : " + count);

// const agesAbove40 = ages.filter(function(age) {
//     if(age > 40)
//     {
//         return true;
//     }
// });

// console.log(agesAbove40);


// const cs = students.filter(function(student) {
//     if(student.dept === 'Computer Science')
//     {
//         return true;
//     }
// });

// console.log(cs)

// const physics = students.filter(function(d) {
//     if(d.dept === 'Physics')
//     {
//         return true;
//     }
// });

// console.log(physics);


// const sq = ages.map(function(age) {
//     return age * 2;
// })
// console.log(sq);

// const cube = ages.map(function(age) {
//     return age * age;
// }).map(function(age) {
//     return age * age;
// });

// console.log(cube);


// const ages2 = ages.filter(function(age) {
//     if(age > 20)
//     {
//         return true;
//     }
// }).map(function(age) {
//     return age * 2;
// });

// console.log(ages2)


// const sorted = ages.sort();
// console.log(sorted);

// const sorted = ages.sort((a, b) => (a > b) ? -1 : 1);
// console.log(sorted);


// const sorted = ages.sort(function(a,b) {
//     return b - a;
// })

// console.log(sorted);

// const list = [4,5,6,7,8];

// var combined = ages.concat(list);
// console.log(combined);


// let totalAgesSum = ages.reduce(function (sum, age) {
//     return sum += age;
// },0);
// console.log(ages);
// console.log(totalAgesSum);

// let sum = ages
//             .filter(function(item) {
//                 if(item > 20)
//                     return true;
//             })
//             .map(function(item) {
//                 return item * 2;
//             })
//             .reduce(function(sum, item) {
//                 return sum+= item;
//             }, 0);

// console.log(sum);

