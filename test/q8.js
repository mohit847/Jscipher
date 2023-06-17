// Question 8:
// Write a JavaScript function that takes a number as input and returns the factorial of that number.
// Input: A number, e.g., 5.
// Output: The factorial of the number, e.g., 120.

function fact(n) {
    if (n === 1 || n < 0) {
        return "Invalid Number";
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        };
        console.log("The Factorial of the number ", result);
        return result;
    }
}

let factorial = fact(5)

