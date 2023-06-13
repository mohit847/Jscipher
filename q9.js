// Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.


var fs = require('fs')
var http = require('http');

http.createServer((rq, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('test.html', (err, data) => {
        if (err) throw err;
        res.write(data);

    })
}).listen(8080);