let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb'
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
