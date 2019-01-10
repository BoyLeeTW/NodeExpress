var express = require('express');
// const logger = require('morgan');

var createDatabase = require('./MySQL/createDatabase');
var query = require('./MySQL/select');

var createTable = require('./MySQL/createTable');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ entended: false }));

// app.use(logger('dev'));
//
// app.use('/use', logger('dev'));

app.all('/', function(req, res, next) {
	console.log('Accessing the secret section');
	next();
}, function(req, res, next) {
	console.log('second function!');
	next();
});

app.get('/', function(req, res) {
	// res.send('<h1>Root!<h1>')
	setTimeout(function() {
		res.redirect('/about');
	}, 3000);
});

app.get('/createTable', function(req, res) {
	createTable.createTable()
	res.send('<h1>CreateTable!<h1>')
});

app.get('/users/:uderId/books/:bookId', function(req, res) {
	res.send(req.params);
});

app.post('/', function(req, res) {
	console.log('POST');
	console.log(req.body.id);
	res.send('<h1>POSTRoot!<h1>')
});

app.delete('/', function(req, res) {
	console.log('DELETE');
	res.send('<h1>DELETERoot!<h1>')
});

// var aMiddleFunction = function (req, res, next) {
// 	console.log('middle function used!')
// 	next()
// };
//
// app.use(aMiddleFunction);
//
// app.use('/', aMiddleFunction);

app.get('/about', function(req, res) {
	res.send('<h1>about!<h1>')
});

app.get('/about/me', function(req, res) {
	res.render('index', { title: 'Express' })
});

app.get('/JSON', function(req, res) {
	res.json({ text: "JSONcontent"})
});

app.use('/file', express.static('node_modules'));

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

let port = process.env.PORT;

if (port == null || port == "") {
	port = 3000
};

app.listen(port, function() {
	console.log('Example app is running on port ' + port);
});