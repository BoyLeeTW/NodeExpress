let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'be2486c3e96d49',
    password: 'f80c050d',
    database: 'heroku_83260ccd1f595f9'
});

function connect(completion) {
    connection.connect(function(err) {
        if (err) {
            completion('Connect failed' + err);
        }
        completion('Connected!');
    });
}

function createTable(completion) {
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    connection.query(sql, function(err, result) {
        if (err) throw err;
        completion('Table created' + result);
    });
}

function insertInfo() {
    let sql = 'INSERT INTO customers (name, address) VALUES ("Michelle", "Blue Village 1")';
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('1 record inserted, ID: ' + result.insertId);
        console.log('Result: ' + result);
    });
}

function query(completion) {

    let sql = 'SELECT name, address FROM customers';

    connection.query(sql, function(err, result, fields) {
        if (err) {
            completion(err)
            return
        }
        completion(result);
    });
}

function updateInfo() {
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}

function deleteInfo() {
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
}

function disconnect(completion) {
    connection.end();

    if (err) {
        completion(err)
        return
    }

    completion('disconnect success!')
}

exports.query = query
exports.createTable = createTable
exports.connect = connect
exports.insertInfo = insertInfo
exports.updateInfo = updateInfo
exports.deleteInfo = deleteInfo
exports.disconnect = disconnect