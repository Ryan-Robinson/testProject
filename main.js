/**
 * Created by ryan on 7/12/16.
 */
var http = require('http');

http.createServer(function (request, response) {
	// send the http header
	// http status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as "Hello World"
	response.end('Hello World!\n yo');
}).listen(8085);

//console will print the message
console.log('Server running at http://127.0.0.1:8085/');