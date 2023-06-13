// Question: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.

var fs = require('fs')

fs.open('mynewfile2.txt','w' , (err, file) =>{
    if(err){
        return err;
    }
    else{
        console.log("file created succsessfully!")
    }
    
})