//! Note-->
// Block of code performs a specific task, can be invoked whenever needed
// which is reusable in nature
// taking some input and returning something
// it saves from redundancy

//! eg:-->

console.log("hello!"); //log is function here
"aba".toUpperCase(); //with () we are invoking the function

function myFunction(msg, n) {
  // here n is local variable block scope outside not accessible
  //parameter
  console.log(msg); // before it's undefined
  return null;
  console.log("shdfv"); // it wont execute anytime
}
myFunction("I Love JS"); // argument
console.log(myFunction("I Love JS"));
// console.log(n);// not accesible local variable

//! Arrow Function-->
// compact way to writing a function
// it's part of modern js
// for small statement we can return this
const arrowSum = (a, b) => {
  console.log(a + b);
};
// console.log(arrowSum); // it will store function definition
console.log(arrowSum(2, 3, 4));

// for single line of statement
let printHello = () => console.log("Hello");
printHello();

//!--> Method and function difference
// binding a function with Object is call methods
// eg: arr.forEach(),str.toUpperCase()

//!--> passing and returning a function in js same like variable
// a function is passed as an argument to another function is callback function
function abc() {
  console.log("hello");
}
function myFunc(abc) {
  return abc;
}
console.log(myFunc());

//!--> arr.forEach(callback function)// it can be normal function or arrow function mostly
//? forEach will pass each element one by one as a value in callback function and we dont need to call it , it wll automatically get invoked
let arr = [1, 2, 3, 4, 5, 6];
// go through every array element and pass it to it's callback function
//!--> it will have three parameter and only used with array arr,forEach(currentValue,index,array)
//!--> it is also a heigher order function which is taking callback function as argument or return function as value
//!--> forEach return undefined unlike map return new Array

arr.forEach((value) => {
  console.log(value); // automatically called
});

arr.forEach(function val(value, idx, arr) {
  console.log(value, idx + "\n" + arr); // automatically called no return possible in forEach
});

//print square of each number using forEach
// we can pass  callback like this as well
// let calcSquare = (num) => {
//   console.log(num * num);
// };
// arr.forEach(calcSquare);

arr.forEach((num) => {
  console.log(num * num);
});

//!--> it is similar like forEach but map return new Array after some operation
let newArr = arr.map((val) => {
  //   console.log(val);
  return val ** 2;
});
console.log(newArr);

//!--> create a new array of elements that give true for a condition filter
// if condition true it will store in new array else for that element condition true will not store in new array
let newArr1 = arr.filter((val) => {
  //   console.log(val % 2 == 0);
  //   false;
  //   true;
  //   false;
  //   true;
  //   false;
  //   true;
  return val % 2 === 0;
  //   return val > 3;
});
console.log(newArr1);

//!--> reduce performs some operation and reduces the array to a single value. it it returns the single value
// print largest number is an array
// use in sum avg
let num = [5, 6, 7, 8, 8, 9];
// prev is accumulator
// curr is currentValue
// prev will have returned value each time and current moved to next
const output = num.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(output);

//!--> Question
// let n = prompt("Enter number");
let n = 10;
let arra = [];
for (let i = 0; i <= n; i++) {
  arra[i] = i + 1;
}
console.log(arra);

let res = arra.reduce((prev, curr) => {
  //   console.log(prev + curr); //to visualize
  return prev + curr;
});
console.log(res);

let fact = arra.reduce((prev, curr) => {
  //   console.log(prev * curr); //to visualize
  return prev * curr;
});
console.log(fact);
