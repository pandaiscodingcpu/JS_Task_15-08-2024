// write a function that finds and returns the longest word in a sentence

function longestWord(sentence) {
    let wordCount = [];
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != " ") {
            count++;
        }
        else if (sentence[i] == " ") {
            wordCount.push(count);
            count = 0; 
        }
        wordCount.push(count);
    }
    return Math.max.apply(null,wordCount);
}

console.log("The length of the longest word is: " + longestWord("DJS Arya is Official Cannister Sattelite Team of DJSCE"));