// Question: Write a JavaScript program that uses a while loop to reverse a given number.
// Example:
// Input: 12345
// Expected Output: 54321


let input = 12345;
let ans = 0;
while (input > 0) {
    ans = ans * 10 + input % 10; //5
    input = Math.floor(input / 10); 
    }
console.log(ans)