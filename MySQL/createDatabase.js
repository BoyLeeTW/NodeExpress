let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

function createDatabase() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        connection.query('CREATE DATABASE mydb', function(err, result) {
            if (err) throw err;
            console.log('Result: ' + result);
        });
    });
}


exports.createDatabase = createDatabase