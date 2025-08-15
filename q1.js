let birthYear = 2023

let age = 2025 - birthYear

if (age >= 18) {
    if(age >= 65) {
        console.log("Your age is " + age);
        console.log("You are eligible for senior citizen benefits.");
    }
    else {
        console.log("Your age is " + age);
        console.log("You are eligible to vote.");
    }
}
else{
    console.log("Your age is " + age);
    console.log("You are not eligible to vote.");
}