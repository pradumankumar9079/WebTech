// VVIP
/************Array Of an Object ********************* */
let cart = [
  { id: 21, name: "bike", price: 3200 },
  { id: 41, name: "cycle", price: 3900 },
  { id: 42, name: "car", price: 1200 },
  { id: 97, name: "van", price: 1900 },
];

/***************ForEach************************/
// Using forEach loop(is a looping statement which work inside array only)
// we dont have to define logic here
// cart.forEach((i)=>{
//     console.log(i)
// })

// return will not work in forEach Method
// let newCart = cart.forEach((i)=>{
//     console.log(i)
//     return i;
// })
// console.log(newCart)

/****************Map************************* */
// Logically no difference between forEach and Map
// cart.map((x)=>{
//     console.log(x.name)
// })

// it return array of object unlike forEach Undefined
// let newp = cart.map((x)=>{
//     return x;
// })
// console.log(newp)

// Using Logic
// for(let i=0; i<cart.length; i++){
//     console.log(cart[i].name);
// }

/**************Filter************************* */
// to filteration of product(it return element for which concition is true)
let newP = cart.filter((x) => {
  // console.log(x.price>3000)
  return x.price > 3000;
});
console.log(newP);

// here accumalator will iterate from zero to index position
// let total = cart.reduce((sum,x)=>{
//     return sum=sum+x.price;
// },sum=0)

// Sir Way
// in rdeduce no need tom return manually it's always return
let total = cart.reduce((sum, x) => (sum = sum + x.price), 0);
console.log("Total: " + total);

/*****************Sort*********************/
let arr = [76, 5, 9, 4, 6, 86];
// it act like bubble sort i,i+1
let newsort = arr.sort((a, b) => {
  // return a-b;// Ascending
  return b - a; // Descending
});
console.log(newsort);
