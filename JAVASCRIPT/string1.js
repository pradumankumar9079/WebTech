// String
// Here we are having string only 
// no character
// we can write in single quote or in double quote
// String is immutable here as well
// String is more like java here and use most array method
let str = "string in javascript";
console.log(str[0])
console.log(str)
console.log(str.length)


let newStr = str.toUpperCase();
console.log(newStr);
console.log(newStr.indexOf('J'));

let lowerString = str.toLowerCase();
console.log(lowerString);

let sub = str.slice(2,4);// second index not included
console.log(sub);

let particularIndexElement = newStr.charAt(2);
console.log(particularIndexElement)

/**********************replace()****************************** */
// to replace first char
let reaplicngAllCharacterWith1 = newStr.replace('I',"J")
console.log(reaplicngAllCharacterWith1);

// to replace All char// check for particular 
let reaplicngAllCharacterWith2 = newStr.replaceAll('I',"J")
console.log(reaplicngAllCharacterWith2);
/**************************************************** */

/******************************slice(Used in Server)********************** */
// it is opposite of join it is use to convert String into array based on seperator
let splitingIntoArray1 = newStr.split(" ");
console.log(splitingIntoArray1)

// it is opposite of join it is use to convert String into array based on seperator
let array2 = "This,is Raja,raj";
let splitingIntoArray2 = newStr.split(",");
console.log(splitingIntoArray2)
/*****************************************************************8 */

