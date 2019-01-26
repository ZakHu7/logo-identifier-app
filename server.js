
var express = require('express');
const http require('http');
var app = express();
var server = http.createServer((req, res) => {
	res.statusCode = 200;
});

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: ' + socket.id);

	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data);
		//io.sockets.emit('mouse', data);
		//sends msg to everyone including self
		//console.log(data);
	}


}

server.listen(3000, () => {

});