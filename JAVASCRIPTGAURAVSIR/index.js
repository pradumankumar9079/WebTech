//Find Intersection of Two Arrays

// let str = "Happy Happy Birthday";
// let newStr = str.replace("Happy Happy ", "Happy ");
// console.log(str);
// console.log(newStr);

// let str = "Happy Happy Birthday";
// let newArr = str.split(" ");
// newArr.shift();
// console.log(newArr);
// console.log(new String(newArr));

// let marks = [34, 578, 78, 64, 79];
// let val = marks.reduce((acc, curr) => {
//   // return curr > 75;
//   acc += curr;
//   // console.log(acc);
//   return acc;
// });
// console.log(val);

// scope is a region of program where a define variable can be recognize
// hiding one variable behind another var is know as variable shadowing
// let hoisted in temprory dead zone(time between the declaration and initialization of let and const var)
// map
let arr = [1, 2, 3, 5];
let newArr = arr.map((num, i, arr) => {
  // console.log(num);
  return num * 3 + i;
});
console.log(newArr);

let newArr1 = arr.filter((num) => {
  return num > 2;
});
console.log(newArr1);

// let arr = [1, 2, 3, 5];
// if no initial value it takes first element as initial value for accumalator
let val = arr.reduce((acc, curr) => {
  // console.log(acc);
  // 1
  // undefined
  // undefined
  // undefined

  return acc + curr;
});
console.log(val);
// polyfill in js-->create own map reduce filter
// in map we can chain stuff in foreach we cant chain stuff because it does not return anything

/******************************************** */
let student = [
  { name: "Raj", rollNumber: 31, marks: 80 },
  { name: "Riya", rollNumber: 22, marks: 97 },
  { name: "Arun", rollNumber: 31, marks: 22 },
];

let newArr3 = student.map((curr) => {
  return curr.name;
});
console.log(newArr3);

let newArr4 = [];
for (let i = 0; i <= student.length - 1; i++) {
  newArr4.push(student[i].name.toUpperCase());
}
console.log(newArr4);

let newArr5 = student.filter((curr) => {
  return curr.marks > 60 && curr.name === "Riya";
});
console.log(newArr5);

let val1 = student.reduce((acc, curr) => {
  // console.log(acc);

  return acc + curr.marks;
}, 0);
console.log(val1);

//! map reduce filter allows chaining
//? eg-->
let newArr6 = student
  .filter((curr) => curr.marks > 60)
  .map((curr) => curr.name);
// for (let i = 0; i <= newArr6.length - 1; i++) {
//   console.log(newArr6[i].name);
// }
// console.log(newArr6);

// First-class functions are functions that can be used like any other value, such as being assigned to a variable, passed as an argument to a function or returned as a result from a function.

//! the ability of a function  to access variable or function that are lexicaly out of it's scope that are closure
// closure created when new function is created

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }
// in var 5,5,5,5,5
// in let 0,1,2,3,4
/******************************************** */

// function are hoisted in a bit different way
// in var --> it put var declare top of the page and it's undefined
// in function --> it put whole function copied to a scope

//tricky question
var x = 21;
var fun = function () {
  console.log(x); //undefined because of hoisting
  var x = 20;
};
fun();
/************************************** */
// spread operator or rest operator
// allows an iterable such an array or string to be expanded into separate elements(unpacks the elements)
// eg: find maximum element in an array
let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(numbers); NaN
let maximum = Math.max(...numbers); //5
let minimum = Math.max(...numbers); //5
console.log(maximum);
console.log(minimum);

let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters);
// [
//   'B', 'r', 'o',
//   ' ', 'C', 'o',
//   'd', 'e'
// ]

// craeting shallow copy with spreade operator
let fruits = ["apple", "orange", "banana"];
let vegetables = ["Raja", "riya"];

// shallow copy of fruits
let vegetables1 = [...fruits];
console.log(vegetables1, "eggs", "milk");

console.log(...fruits, ...vegetables);

// eg: for spread and num
function multiply(...arr) {
  //rest operator
  console.log(arr[0], arr[1]); //1,2
}
multiply(...arr); //spread operator
/************************************** */

// how arrow function different from normal functio
// use arrow instead of function keyword
// consise
// implicit return
// dont have argument object
// this keyword worked differently
let user = {
  username: "Raja raj",
  re1: () => {
    console.log(this.username);
  },
  re2() {
    console.log(this.username);
  },
};
console.log(user.re1());
console.log(user.re2());

// a scope which refers to current context of a code is lexical scope
// or we can say that a variable defined outside of function accesible inside a function
// closure help to opitimize our code
//!eg:
let username2 = "Riya raj";
//global scope
function local() {
  // local scope
  console.log(username2);
}
local();

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}
console.log(sum(10)(20)(30)(40));

// Q1)
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //shadowing
    console.log(count); //1
  }
  console.log(count); //0
})();
