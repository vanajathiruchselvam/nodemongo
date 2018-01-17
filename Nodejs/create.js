var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('welcome to uki. i am thuva ');
}).listen(8080);
