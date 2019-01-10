let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'be2486c3e96d49',
    password: 'f80c050d',
    database: 'heroku_83260ccd1f595f9'
});

function query() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        let sql = 'SELECT name, address FROM customers';

        connection.query(sql, function(err, result, fields) {
            if (err) throw err;
            // console.log(fields);
            console.log(result);
            // console.log('Result: ' + result);
        });
    });
}

exports.query = query