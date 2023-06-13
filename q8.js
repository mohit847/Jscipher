// Question:
// Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.

var myDateTime = require('./myDateTime')
var http = require('http');

http.createServer((rq, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("Current Date and time :" + myDateTime.myDateTime())
    // res.end('');
}).listen(8080);