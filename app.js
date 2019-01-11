var express = require('express');
// const logger = require('morgan');

let mySQLHandler = require('./mySQLHandler');
let requestSender = require('./RequestSender');
var app = express();

let os = require('os');
let hostname = os.hostname();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ entended: false }));

app.all('/', function(req, res, next) {
	console.log('Accessing the secret section');
	next();
}, function(req, res, next) {
	console.log('second function!');
	next();
});

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html', function(err) {
		if (err) res.send(404);
	});
});

app.get('/connect', function(req, res) {
	mySQLHandler.connect(function(result) {
		res.send(result)
	})
})

app.get('/disconnect', function(req, res) {
	mySQLHandler.disconnect(function(result) {
		res.send(result)
	})
})

app.get('/createTable', function(req, res) {
	mySQLHandler.createTable(function(result) {
		res.send(result)
	})
});

app.get('/queryAll', function(req, res) {
	mySQLHandler.query(function(result) {
		res.send(result)
	})
});

app.get('/insert', function(req, res) {
	mySQLHandler.insertInfo(req.query.name, req.query.address, function(result) {
		res.send(result)
	})
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
	console.log('app is running on port ' + port);
});