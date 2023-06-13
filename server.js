const http = require('http')
const newModule = require('./newModule.js')


http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("This is the date : " + newModule.myDateTime())
    res.end('');

}).listen(8080);