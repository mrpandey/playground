var port = process.argv[2];
var file = process.argv[3];
var http = require('http');
var fs = require('fs');

var srcStream = fs.createReadStream(file);

var server = http.createServer (function (req, res) {
    srcStream.pipe(res);
});

server.listen(port);
