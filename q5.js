// Question: Write a JavaScript program that checks if a given string is a palindrome.
// Example:
// Input: "racecar"
// Expected Output: true

let input = "racecar";
let isPalindrome = true;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    isPalindrome = false;
  }
}

console.log(isPalindrome);
