var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    data = fs.readFileSync('./docs/main.html');
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}).listen(8080);
console.log("server start!!");
