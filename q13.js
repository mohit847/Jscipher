// Question: Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.



const fs = require('fs');

fs.appendFile('mynewfile4.txt', 'This is my text.', function (err) {
  if (err) {
    console.log( err);
  } else {
    console.log('Content appended to the file successfully!');
  }
});
