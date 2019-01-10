let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    connection.query(mysql, function(err, result) {
        if (err) throw err;
        console.log('Result: ' + result);
    });
});
