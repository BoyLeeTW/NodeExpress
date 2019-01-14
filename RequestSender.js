let http = require('http');

function request(options, completion) {
    var req = http.request(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            completion(chunk);
            return;
        });
    });

    req.on('error', function(error) {
        console.log('problem with request: ' + error.message);
    });

    req.end();
}

exports.request = request;