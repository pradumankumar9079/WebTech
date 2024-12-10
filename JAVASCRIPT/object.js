// In JS We Can Create Object in three ways
// javascript is functional programming language it's independant of class
// 1)literal way
// 2) constructor way
// 3) using class keyword

//Creating Object Using Literal
// it's collection of heterogenous element
// Form of Key Value Pair

let student = {
    id: 101,
    name: "abc",
    phone: 123456789,
    email: "abc@gmail.com",
    isPresent: true,
}   

//read from object
console.log(student);
console.log(student.email);

// add in Object
student.age = 21;
console.log(student)

//Update in Object
student.phone=9079213789;
console.log(student)

//Using delete operator we can remove something from Object
delete student.email;
console.log(student)


// Creating Object Using Constructor way
function cricket(id,players,scores,overs){
    this.id = id;
    this.players = players;
    this.scores = scores;
    this.overs = overs;
}

let c1 = new cricket(12,11,200,30);
// here it won't print address it will print Object itself
console.log(c1)

// Creating Object Using Class Way
class Employee{
    // Functional Based Programming Language that's why we are using constructor keyword to initialize value
    constructor(id,name,sal,dept){
        this.id = id;
        this.name = name;
        this.sal = sal;
        this.dept = dept;
    }
}

let e1 = new Employee(11,"abc",120000,"Java");
console.log(e1);
