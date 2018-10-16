var port = process.argv[2];
var http = require('http');

var server = http.createServer (function (req, res) {
    req.setEncoding('utf8');

    if(req.method == 'POST') {
        var body = '';
        
        req.on('data', function (chunk) {
            body += chunk.toUpperCase();
        });

        req.on('end', function () {
            res.end(body);
        });
    }
});

server.listen(port);
