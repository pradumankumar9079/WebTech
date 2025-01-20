// https://jsonplaceholder.typicode.com/posts
// let res = fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return res.json();
// }).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console. log(error)
// })

// async function fetchData(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let response = await res.json();
//     console.log(response)
// }
// fetchData()

// let arr = [1,2,4,5,6];

// let res = arr.map((i)=>{
//     return i*2;
// })
// console.log(res)

// let arr =[1,3,5,7,9];
// let res = arr.filter((i)=>{
//     return i>=2;
// })
// console.log(res)

// let arr=[1,2,3,4,5]
// let ans = arr.reduce((sum,i)=>{
//     return sum+i
// },0)
// console.log(ans)

// let data = new Promise((resolve,reject)=>{
//     let isResolve=true;
//     if(isResolve){
//         resolve("Resolved")
//     }else{
//         reject("Rejected")
//     }
// });
// data.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })


let data = new Promise((resolve,reject)=>{
    let isResolve = true;
    if(isResolve){
        resolve("Resolved")
    }else{
        reject("Rejected")
    }
})

data.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error)
})