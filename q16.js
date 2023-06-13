// Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
// Example Input: multiplyByTwo(5, callback);


// Expected Output:Result: 10
// Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
// Example Input:calculateSum([2, 4, 6, 8], callback);


// Expected Output:Sum: 20


function multiplyByTwo(number, callback) {
    var result = number * 2;
    callback(result);
  }

  function callback(result) {
    console.log("Result:", result);
  }
  
  multiplyByTwo(5, callback);
  