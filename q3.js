// string operations

// reverse a string

let str = "DJS Arya";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed String: "+reversedStr); 

// check for palindrome
if (str === reversedStr) {
    console.log("The string is a palindrome.");
}
else {
    console.log("The string is not a palindrome.");
}

// coun vowels in a string
let vowels = "aeiou";
let count = 0;
currentChar = [];
for(let i = 0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())) { // to check if the character is a vowel
        if(currentChar.includes(str[i].toLowerCase())) {
            continue; // skip if the vowel is already counted
        }
        currentChar.push(str[i].toLowerCase()); // add the vowel to the currentChar array   
        count++;
    }
}
console.log("Number of vowels in the string: " + count); 