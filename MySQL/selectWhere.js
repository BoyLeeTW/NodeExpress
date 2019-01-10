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

    // Where filters
    // let sql = 'SELECT * FROM customers WHERE address = "Park Lane 38"';

    // Wildcard Characters
    // let sql = 'SELECT * FROM customers WHERE address LIKE "S%"';

    // connection.query(sql, function(err, result, fields) {
    //     if (err) throw err;
    //     // console.log(fields);
    //     console.log(result);
    //     // console.log('Result: ' + result);
    // });

    //Escaping Query Value
    // let adr = 'Mountain 21';
    // let sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    //
    // connection.query(sql, function(err, result, fields) {
    //     if (err) throw err;
    //     // console.log(fields);
    //     console.log(result);
    // });

    let name = 'Amy';
    let adr = 'Mountain 21';
    let sql = 'SELECT * FROM customers WHERE address = ? OR name = ?';

    connection.query(sql, [adr, name], function(err, result, fields) {
        if (err) throw err;
        // console.log(fields);
        console.log(result);
    });

});
