// Question: Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method.

const fs = require('fs');


fs.appendFile('file1.txt', "This is appended file", function (err) {
  if (err) {
   return err;
  } else {
    console.log('Content appended to the file successfully!');
  }
});
