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


// forEach
// for(let i=0; i<students.length; i++)
// {
//     console.log(students[i])
// }

// students.forEach(student => {
//     console.log(student.name)
// })


// filter
// let ages16 = [];
// for(let i=0;i<ages.length;i++)
// {
//     if(ages[i] >= 16)
//     {
//         ages16.push(ages[i]);
//     }
// }

// const  ages16 = ages.filter(function(age) {
//     if(age >= 16)
//     {
//         return true;
//     }
// });
// console.log(ages16)

// const ages16 = ages.filter(age => age >= 16);
// console.log(ages16)

// const csStudents = students.filter( student => student.dept === 'Physics');
// console.log(csStudents);

// const after2013 = students.filter(item => (item.start >= 2012 && item.end <= 2016));
// console.log(after2013)


// map
// const name = students.map(function (item) {
//     return item.name;
// });
// const names = students.map(item => item.name);
// console.log(names);

//const agesSqrt = ages.map(age => Math.sqrt(age));
// const agesSqrt = ages
//                     .map(age => age * 2)
//                     .map(age => age * 3);

// console.log(agesSqrt);

// sort
// const sorted = students.sort(function (c1, c2) {
//     if(c1.start > c2.start)
//     {
//         return 1;
//     }
//     else   
//         return -1;
// });

// console.log(sorted);

// const sorted = students.sort( (c1, c2) => (c1.start > c2.start) ? 1 : -1)
// console.log(sorted);

// const sorted = ages.sort();
// console.log(sorted);

// const sorted = ages.sort((a,b) => a - b);
// console.log(sorted);

// concatination
// var arr1 = [1,2,4,5,6];
// var arr2 = [45,6,6,7,7,8];

// arr1.concat(arr2);

// reduce
// ageSum = 0;
// for(let i=0;i<ages.length;i++)
// {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const startSum = students.reduce(function(total, students) {
//     return total + students.start
// }, 0);

// console.log(startSum);

// combination
// const combine = ages
//                     .map(age => age * 2)
//                     .filter(age => age >= 40)
//                     .sort((a, b) => a - b)
//                     .reduce((total, ages) => total+ages,0)

// console.log(combine)

// spread
// combine elements of two arrays.
// var subjects = ['Web Designing', 'Database', 'OOP'];
// var subjects2 = ['Data Structure', 'Algorithms', ...subjects, 'Data Science']

// console.log(subjects2);

// passing elemtents of array as argurments functions
// function add(a, b, c)
// {
//     console.log(a+b+c)
// }

// var args = [0,1,2];

// add(...args);


// as REST operator (ellipsis in Java)

// function multiply(multiplier, ...args)
// {
//     return args.map(element => multiplier * element);
// }
// var arr = multiply(2,3,4,5);
// console.log(arr);


// callbacks
// function one()
// {
//     setTimeout(function() {
//         console.log(1);
//     }, 1000)

// }
function two() {
    console.log('Two is called');
}

one();
two();


function one() {
    setTimeout(() => {
        console.log('One is called..');
    }, 2000);

}




// promises

// async - await (with fetch)