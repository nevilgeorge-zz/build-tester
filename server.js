// server.js

var express = require('express'),
	open = require('open'),
	app = express();

app.set('port', 8000);
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
	res.send('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});


open('http://localhost:8000');
