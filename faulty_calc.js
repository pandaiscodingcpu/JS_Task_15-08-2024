/*
Create a faulty calculator that performs addition, subtraction, multiplication, and division.
1. The calculator should take two numbers and an operator as input.
It performs wrong operations 10% of the time.

2. + --> -
3. * --> +
4. - --> /
5. / --> **
 */

function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    } 
    return x / y;
}
function power(x,y){
    return Math.pow(x,y);
}

function generateRandomNumber(){
    return Math.random();
}

console.log("Enter two numbers and an operator (+, -, *, /):");
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /):");

let result;
const randomNumber = generateRandomNumber();
if (randomNumber < 0.1) {
    // Perform wrong operation 10% of the time
    switch (operator) {
        case '+':
            result = subtract(num1, num2);
            break;
        case '-':
            result = divide(num1, num2);
            break;
        case '*':
            result = add(num1, num2);
            break;
        case '/':
            result = power(num1, num2);
            break;
        default:
            console.log("Invalid operator");
            result = null;
    }
} else {
    // Perform correct operation 90% of the time
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator");
            result = null;
    }
}
if (result !== null) {
    console.log(`Result: ${result}`);
}  
else {
    console.log("An error occurred while calculating the result.");
}