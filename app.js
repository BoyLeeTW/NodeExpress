process.env.NODE_ENV = 'production';

var express = require('express');
// const logger = require('morgan');
var app = express();

// app.use(logger('dev'));
//
// app.use('/use', logger('dev'));

// app.all('/', function(req, res) {
// 	console.log('Accessing the secret section');
// });

app.get('/', function(req, res) {
	res.send('<h1>Root!<h1>')
});

app.post('/', function(req, res) {
	console.log('POST');
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

app.listen(3000, function() {
	console.log('Example app is running on port 3000!');
});