// Question 4:
// Write a JavaScript function that takes a string as input and returns the reverse of that string.
// Input: A string, e.g., "OpenAI".
// Output: The reverse of the string, e.g., "IAnepo".



function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }
  
  var input = "OpenAI";
  var reversedString = reverseString(input);
  console.log(reversedString); 
  