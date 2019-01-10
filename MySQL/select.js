let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb'
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