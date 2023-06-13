
// Question: Create a Node.js program that renames a file called "mynewfile1.txt" to "myrenamedfile.txt" using the fs.rename() method.


const fs = require('fs');

// const oldFileName = 'mynewfile1.txt';
// const newFileName = 'myrenamedfile.txt';

fs.rename('mynewfile1.txt','myrenamedfile.txt', function (err) {
  if (err) {
    console.log( err);
  } else {
    console.log('File renamed successfully!');
  }
});
