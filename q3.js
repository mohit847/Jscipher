// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
// Example:
// Input: "Hello, World!"
// Expected Output: 3



let input = "hello, World!";
let count = 0;

for(let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if (
        input[i] === "a" ||
        input[i] === "e" ||
        input[i] === "i" ||
        input[i] === "o" ||
        input[i] === "u" ||
        input[i] === "A" ||
        input[i] === "E" ||
        input[i] === "I" ||
        input[i] === "O" ||
        input[i] === "U"
    ) {
        count++;
    }
}

console.log(count);
