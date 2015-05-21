// server.js

var express = require('express'),
	app = express();

app.set('port', 8000);

app.get('/', function(req, res) {
	res.send('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

