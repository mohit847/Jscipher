// Question 7:
// Write a JavaScript function that takes an array of strings as input and returns the concatenated string of all the elements.
// Input: An array of strings, e.g., ["Hello", " ", "world!"].
// Output: The concatenated string, e.g., "Hello world!".

function concatenate(arr) {
    return arr
        .join("");
}

let result = concatenate(["Hello", " ", "world!"])  

console.log(result)