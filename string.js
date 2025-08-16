// To find length of a string
let str = "JavaScript is a popular programming language.";
console.log("Length of the string:", str.length);

// accessing characters in a string
/*
for (let i=0;i<str.length-35;i++){
    console.log(`Character at index ${i}:`, str[i]);
}*/

//template literals
let name = "John";
let friend = "Doe";
console.log("His name is "+name+" and his friend's name is "+friend+".");
console.log(`His name is ${name} and his friend's name is ${friend}.`);

// slice method
let sentence = "JavaScript is fun!";
console.log("Original sentence:", sentence);
console.log("Sliced sentence (0-10):", sentence.slice(0, 10));

// split method
let words = sentence.split(" ");
console.log("Words in the sentence:", words);
console.log(typeof words); // Outputs: object (arrays are objects in JS)

// join method
let joinedSentence = words.join(" ");
console.log("Joined sentence:", joinedSentence);

let w = [ 'JavaScript', 'is', 'fun!' ]
console.log(typeof w); // Outputs: object


// Note that each time we use string methods like slice, split, or join, we are creating a new string or array. Strings in JavaScript are immutable, meaning they cannot be changed directly. Instead, these methods return new strings or arrays based on the original string.