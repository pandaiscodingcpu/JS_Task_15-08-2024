/*
alert("hello world");

console.log("Code is running"); // this adds the string in the console

var a = prompt("Enter a number");
console.log(a);

var isTure = confirm("Are you sure you want to delete this?");
if (isTure) {
    console.log("Deleted");
}
else {
    console.log("Not deleted");
}
*/
// variable in JS

var a = 4;
var b = 2;
console.log(a + b); 

/*
var-> used to declare a variable and global scope
let-> used to declare a variable and block scope
const-> used to declare a constant variable and block scope (constant variable cannot be changed)
*/

// objects in JS
var o = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(o.name);