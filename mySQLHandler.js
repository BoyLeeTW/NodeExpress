let mysql = require('mysql');
let mySQLCredentialKeeper = require('./mySQLCredentialKeeper');


let connection = mysql.createConnection(
    mySQLCredentialKeeper.testConfig
);

function connect(completion) {
    connection.connect(function(err) {
        if (err) {
            completion('Connect failed' + err);
            return
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

function insertInfo(name, address, completion) {
    let sql = 'INSERT INTO customers (name, address) VALUES ?';
    let value = [[name, address]]
    connection.query(sql, [value], function(err, result) {
        if (err) {
            completion(err);
            return
        }
        completion('Insert success!');
    });
}

function query(completion) {

    let sql = 'SELECT name, address FROM customers';

    connection.query(sql, function(err, result, fields) {
        if (err) {
            completion(err);
            return
        }
        completion(result);
    });
}

function updateInfo(name, address, completion) {
    let sql = `UPDATE customers SET address = '${address}' WHERE name = '${name}'`
    connection.query(sql, function (err, result) {
        if (err) {
            completion(err);
            return
        }
        completion("Number of record updated: " + result.affectedRows);
    });
}

function deleteInfo(name, address, completion) {
    let sql = `DELETE FROM customers WHERE address = '${address}' && name = '${name}'`;
    connection.query(sql, function (err, result) {
        if (err) {
            completion(err);
            return
        }
        completion("Number of record deleted: " + result.affectedRows);
    });
}

function disconnect(completion) {
    connection.end();

    completion('disconnect success!')
}

exports.query = query;
exports.createTable = createTable;
exports.connect = connect;
exports.insertInfo = insertInfo;
exports.updateInfo = updateInfo;
exports.deleteInfo = deleteInfo;
exports.disconnect = disconnect;