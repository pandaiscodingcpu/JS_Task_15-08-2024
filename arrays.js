// Arrays in JS
let arr = [4,5,7];

console.log(arr); 

// printing the length of the array
console.log(arr.length);

// Arrys are mutable
arr[0] = 10;
console.log(arr);

// Adding an element to the end of the array
arr.push(20);
console.log(arr);

// Removing the last element of the array
arr.pop();
console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/*
Arrays methods:

1. toString() - Converts the array to a string
2. join() - Joins all elements of an array into a string
3. indexOf() - Returns the first index at which a given element can be found
4. lastIndexOf() - Returns the last index at which a given element can be found
5. slice() - Returns a shallow copy of a portion of an array
6. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
7. concat() - Merges two or more arrays
8. forEach() - Executes a provided function once for each array element
9. map() - Creates a new array with the results of calling a provided function on every element in the calling array
10. filter() - Creates a new array with all elements that pass the test implemented by the provided function
11. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
12. find() - Returns the value of the first element in the array that satisfies the provided testing function
13. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
14. sort() - Sorts the elements of an array in place and returns the sorted array
15. reverse() - Reverses the elements of an array in place
16. fill() - Fills all the elements of an array from a start index to an end index with a static value
17. includes() - Determines whether an array includes a certain value among its entries
18. every() - Tests whether all elements in the array pass the test implemented by the provided function
19. some() - Tests whether at least one element in the array passes the test implemented by the provided function
20. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
*/

// Example of using some array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 
let found = numbers.find(num => num > 3);
console.log(found);
// 4

let index = numbers.findIndex(num => num > 3);
console.log(index); // 3 (index of the first element greater than 3)   
