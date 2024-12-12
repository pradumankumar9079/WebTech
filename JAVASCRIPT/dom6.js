// Prepare what is DOM and How To Answer:

/****************Using id************ */
// here id is return single element so no need of index to access
let parent=document.getElementById("d1");
console.log(parent);
parent.innerText = "This is Parent";
/********************************** */


/***************using Class Name***** */
// using className it return collection of elements so using index we need to specify which one we need to print
let para=document.getElementsByClassName("m1");
console.log(para);
para[0].innerText = "This is Div";
para[1].innerText ="This is Heading";
/********************************** */

/***********Using TagName*********** */
// it is also returning collection of element so use index
let p =  document.getElementsByTagName("p");
console.log(p)
p[0].innerHTML="This is para 1"
p[1].innerHTML="This is para 2"
p[2].innerHTML="This is para 3"
p[3].innerHTML="This is para 4" 
/********************************** */

/*************Query Selector******* */
// it return one element at a time
// it is considering css selector as a query
// textContent is similar to innerText,innerHtml

let h1 = document.querySelector("#q1");
console.log(h1)
h1.textContent="This is QuerySelectot 1";

let h2 = document.querySelector(".q2");
console.log(h2)
h2.textContent="This is QuerySelector 2"

// This will select all the element which is having same id or same class or same tag Name
// querySelectorAll will return NodeList
// put url from web (local access not allowed in img js src) 
let img = document.querySelector("img");
img[0].src="";
img[1].src="";
img[2].src="";
img[3].src="";
/********************************** */

