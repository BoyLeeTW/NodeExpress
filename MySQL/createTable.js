let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'be2486c3e96d49',
    password: 'f80c050d',
    database: 'heroku_83260ccd1f595f9'
});

mysql://be2486c3e96d49:f80c050d@us-cdbr-iron-east-01.cleardb.net/heroku_83260ccd1f595f9?reconnect=true

function createTable() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log('Table created');
            console.log('Result: ' + result);
        });
    });
}

exports.createTable = createTable