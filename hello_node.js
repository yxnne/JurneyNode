var http = require('http');

http.createServer(function(req, rsp){
	rsp.writeHead(200, {'Content-type':'text/plain'});
	rsp.end('Hello nodejs world!');
}).listen(3000);