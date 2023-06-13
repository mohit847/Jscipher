

// Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.


var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('Hello World!')
}).listen(8080)

