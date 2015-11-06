var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	console.log('Hit GET /');
	res.render('index');
});

app.get('/solar', function(req, res) {
	console.log('Hit GET /solar');
	res.render('solar');
});

app.get('/wind', function(req, res) {
	console.log('Hit GET /wind');
	res.render('wind');
});

app.get('/hydropower', function(req, res) {
	console.log('Hit GET /hydropower');
	res.render('hydropower');
});

app.get('/geothermal', function(req, res) {
	console.log('Hit GET /geothermal');
	res.render('geothermal');
});

app.get('/about', function(req, res) {
	console.log('Hit GET /about');
	res.render('about');
});

app.get('/credits', function(req, res) {
	console.log('Hit GET /credits');
	res.render('credits');
});

app.listen(3000);
console.log('Listening...');