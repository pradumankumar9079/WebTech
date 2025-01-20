// let marks = {
//   1: 2,
//   1: 3,
// };
// console.log(marks[1]);

let marks = [1, 2, 3, 4, 5];
let name = ["Raja", "riya"];
console.log(marks);
console.log(marks.length); //property not method
console.log(typeof marks); //object(it's like a object it have key as index value as element)
marks[100]; // undefined not array index out of bound
// marks[20] = 20; //array mutable string immutable
console.log(marks);

// Loop we can perform on iterables
// (array,string,object)
for (let i = 0; i <= marks.length - 1; i++) {
  console.log(marks[i]);
}

// using for of
let avg = null,
  sum = null,
  n = 10;
for (let number of marks) {
  //   console.log(number);
  sum += number;
}
avg = sum / marks.length;
// template literal
console.log(`Average marks is: ${avg}`);

// 10% less on each element
for (let i = 0; i < marks.length; i++) {
  marks[i] = marks[i] - (marks[i] * 10) / 100;
}
console.log(marks);

// Array methods
//in array some method change array some are not
// in string no method will change string it will return new string

console.log(marks.push(2, "Raja")); // add at the end and return size
console.log(marks.unshift(233, 5)); // add at start and return size
console.log(marks);

console.log(marks.pop()); // add at the end remove one item and return element
console.log(marks.shift()); // add at the start remove one item and return element
console.log(marks);

console.log(marks.toString()); // it is use to convert array into string

// it is use to concat two array an return a new array no change in original array more than one allowed
console.log(marks.concat(name, marks));

console.log(marks.slice(1)); // slice not make change in original array
// ending index non inclusive
// give first index it will take all other till end
// not giving index it will make copy of array

let arr = [1, 2, 3, 4, 5, 5, 5, 6];
// arr.splice(1, 2, 3); // making changes in array we can do add,replace,delete
console.log(arr);
console.log(arr.splice(4)); //[ 5, 5, 5, 6 ] deleted returned
arr.splice(4); // it will understand start from 4 and delete all
console.log(arr); //[ 1, 2, 3, 4 ]-->left
arr.splice(); // it will understand no change
console.log(arr); //no chage
