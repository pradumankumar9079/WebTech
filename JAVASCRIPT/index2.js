// Q1) Execution Context is written inside note
// let a = 10;
// let b = 20;

// function mul(x,y){
//     // let b =20;//-- check this
//     let m = a*x+b*y;
//     return m;
// }// this will skipped and elvaluate in line 10

// let sum = mul(20,30); // here it will get evaluated
// console.log(sum);

// Q2) -- Trace it
// let m = 20;
// let n = 10;
// // here we can give definition of one function inside another
// function parent(x1,y1){
//     function sub(x,y,z){
//         z = x-y/m+n*x1-y1;
//         return z;
//     }
//     console.log(sub(10,20)); //we can't define outside this it having inner block scope
//     // here we are having three parameter but we are passing two so it will take 2 in order and leave third one (Still Work)
// }
// parent(10,20);
/************************************************************************************ */
// here it will still work nothing like overloading and overriding here(every possible scenarion like multi define same method work)
// function parent(x1,y1){
    // parent(10,20);
    // }
/************************************************************************************ */

//Q3)-- Trace it
let m = 20;
let n = 10;
// here we can give definition of one function inside another
function parent(x1,y1){
    function sub(x,y,z){
        function add(){
            let p = 90;
            z = x-y/m+n+p*x1-y1; // 10-1+10+900-20 = 9+890=899
            return z;
        }
        return add();
    }
    return sub(10,20);

}
console.log(parent(10,20));