// Some more method in Array
let arr = [23,"Jspider",true,null,65];
console.log(arr);

/******************arr.include(val)******************** */
let b = arr.includes(null);//true
console.log(b)
let c = arr.includes(-23);//false
console.log(c)

let arr1 = [23,"Jspider",8,8,8,true,12,8,null,65];
console.log(arr1);

let d = arr1.lastIndexOf(8);//7
console.log(d);

let e = arr1.indexOf(8);//2
console.log(e);

// providing element , starting position
let f = arr1.indexOf(8,4);//4
console.log(f);





