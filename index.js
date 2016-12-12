var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var typing = false;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
});


http.listen(3000, function() {
	console.log("Listening on port 3000....");
});