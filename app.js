// Module Includes
var io = require('socket.io').listen(8000)
  , express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');
  
var app = express();

// MySQL Configuration
var client = mysql.createConnection({ 
   host: 'localhost',
   port: 3306,
   user: 'username', 
   password: 'password', 
   database: 'db'
});


// Http Config
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

// Development or Production
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);

// Server Creation
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// Socket.io Functions
io.sockets.on('connection', function (socket) {
	socket.emit('helloWorld', "Hello World!");
});