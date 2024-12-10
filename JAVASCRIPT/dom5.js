// Created html element which is object here in JavaScript
let a = document.createElement("h1")
console.log(a);
// these css properties is actually javascript object
a.innerText="This is Heading text"
a.style.color="green"
a.style.backgroundColor="skyblue";

// Tag Selector to select htl element using document
// dom is use to convert html tag into javascript object and than print in browser as html tag
let parent = document.getElementById("d1");
console.log(parent)
parent.appendChild(a);

