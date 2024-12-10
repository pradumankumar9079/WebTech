//array is heterogenous in nature here
// and it's dynmic in nature here
// we are also having index to access value
let arr=[21,"Jspider",true,null,65];
console.log(arr);

// to access particular index element
console.log(arr[0]);

// to finding size of array
console.log(arr.length);

// type of array is objcet
console.log(typeof arr);// Object


// push is built in method which is use to add element at the end 
arr.push(23,3412,34,"Hello");
console.log(arr);
console.log(arr.length)

// to adding at starting index position
arr.unshift(56,"Jsp")
console.log(arr);
console.log(arr.length)


// pop is used to remove last element from the array
arr.pop();
arr.pop();
console.log(arr);
console.log(arr.length)

// to removing at starting index position
arr.shift()
console.log(arr);
console.log(arr.length)

console.log("-----------------------------")
// splice() is use to add or remove element at any specified index
let arr1=[21,"Jspider",true,null,65];

// syntaxt arr.splice(starting position, delete count, new element any number)
let x =  arr1.splice(2,3,"Hello","Raja",2);
console.log(x)

// let y = arr1.splice(2,0,"Hello","Raja",2);// it will include these element without deleting anything
// console.log(y)
console.log("-----------------------------")


// slice() part  of array
// this method can't affect original Array
let b=arr.slice(1,4) // excluding 4 like java substring
console.log(b);

// arr.toString() it convert whole array into string
let str = arr.toString();
console.log(str)

// arr.join("Provide seperator here")
let a = arr.join("-");
console.log(a);

//arr.reverse() to reverse array (won't affect original array)
arr.reverse();
console.log(arr);

