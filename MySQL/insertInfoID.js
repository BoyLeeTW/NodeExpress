let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'be2486c3e96d49',
    password: 'f80c050d',
    database: 'heroku_83260ccd1f595f9'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    let sql = 'INSERT INTO customers (name, address) VALUES ("Michelle", "Blue Village 1")';
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('1 record inserted, ID: ' + result.insertId);
        console.log('Result: ' + result);
    });
});
