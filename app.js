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

function Connect() {
	console.log('connect')
}

app.use(express.static('public'));

app.get('/js', function(req, res) {
	res.write
})

app.get('/', function(req, res) {

	res.sendfile(__dirname + '/index.html', function(err) {
		if (err) res.send(404);
	});
	/*
	res.set('Content-Type', 'text/html');
	res.write('<h1>MySQL DB on Heroku</h1>')
	res.write(`<button onclick="Connect()">Connect</button><br>
			<button onclick="Query()">Query</button><br>
			<button onclick="Insert()">Insert</button><br>
			<button onclick="Update()">Update</button><br>
			<button onclick="Delete()">Delete</button><br>`
	)
	res.write('<script src>localhost</script>')

	// res.write(
	// 	'<script>' +
	// 	'function down(){' +
	// 		'var url = ./' +
	// 		'var request = new XMLHttpRequest();' +
	// 		'request.open("GET", url);' +
	// 	'}' +
	// 	'</script>'
	// )

	res.write(
		'<script>' +
		'function Query() {' +
			'post("Query!");' +
		'}' +
		'</script>'
	)

	// res.write(
	// 	'<script>' +
	// 	'function Connect() {' +
	// 		'mySQLHandler.connect(function(result) {' +
	// 			'post(result);' +
	// 		'});' +
	// 	'};'
	// 	'</script>'
	// )
	res.write(
		`<script>function Connect() {
			mySQLHandler.connect(function(reslut) {
				post(result)
			})
		}</script>`
	)

	res.write(
		'<script>' +
		'function Insert() {' +
			'post("Insert!")' +
		'}' +
		'</script>'
	)

	res.write(
		'<script>' +
		'function Update() {' +
		'post("Update!")' +
		'}' +
		'</script>'
	)

	res.write(
		'<script>' +
		'function Update() {' +
			'post("Delete!")' +
		'}' +
		'</script>'
	)

	res.write(
		'<script>' +
		'function sendRequest(options, completion) {' +
			'post("Connect!")' +
		'}' +
		'</script>'
	)

	res.write(
		'<script>function post(input) { console.log(input);}</script>'
	)
	res.end();

	// var options = {
	// 	host: hostname,
	// 	port: 3000,
	// 	path: '/about',
	// 	method: 'GET'
	// };
	//
	// requestSender.request(options, function(result) {
	// 	res.send(result);
	// });
	*/
});

app.get('/connect', function(req, res) {
	// var options = {
	// 	host: hostname,
	// 	port: 3000,
	// 	path: '/connect',
	// 	method: 'GET'
	// };
	//
	// requestSender.request(options, function(result) {
	// 	res.send(result);
	// });

	mySQLHandler.connect(result) {
		res.send(result)
	}
})



app.get('/createTable', function(req, res) {
	// createTable.createTable()
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