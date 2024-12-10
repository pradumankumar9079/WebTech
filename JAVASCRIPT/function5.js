// Anonymous function
// function(a,b){
//     let c = a/10+b/2;
//     console.log(c);
// }

// to invoke we have two way
//1st way: to call anonymous function we have(Immedeatly invloked function expression)
// we are invoking as soon as we created function
(function(a,b){
        let c = a/10+b/2;
        console.log(c);
    }
)(20,30);
console.log('i');
// it won't work here we have to call immideatly
// (20,30);

//2nd way: to call anonymous function we can also use(function with expression)
// storing into variable
// we can also return here it will store into variable
// let add = function(a,b){// here if we will not passed anything to a and b it is considered as undefined                                                
//         let c = a/10+b/2;
//         console.log(c);
//     };
//     console.log(typeof add);
//     add(20,30);


    /**************NAN*********************** */
    // Extra Points on NAN:
    // NAN:- Means Not a Number this output appear when we perform any kind of operation with number+and any other data type(it should be array object undefined) other than String
    /**************************************** */

    /******************Arrow Function********************** */
    let add=(a,b)=>{
        return a+b;
    };

    function mul(x,y){
        return x*y;
    };

    // Callback Function: a function which is accepting another function as argument

    // higher order function: a function which is accepting and returning function is known as higher order function
    
    // lower order function: a function which is not accepting and not returning function is know as lower order function
    let Operation = function(calc,m,n){
         return calc(m,n);
    };

    let total = Operation(add,20,30);
    console.log(total);