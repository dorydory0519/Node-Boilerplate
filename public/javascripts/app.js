//Socket.io Connect
	var socket = io.connect('http://localhost:8000');
	
//Hello World

socket.on('helloWorld', function(data) {
	$('.wrapper').html(data);
});