var port = process.argv[2];
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if(req.method == 'GET') {
        var parsedUrl = url.parse(req.url);
        var query = parsedUrl.search.substring(5);
        var jsonStr = '';

        if(parsedUrl.pathname == '/api/parsetime') {
            jsonStr = hms(query);
        }
        else if(parsedUrl.pathname == '/api/unixtime') {
            jsonStr = unixtime(query);
        }
        
        if(jsonStr) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(jsonStr);
        }
        else {
            res.writeHead(404);
            res.end();
        }
    }
});

server.listen(port);

function hms(dateString){
    var d = new Date(dateString);
    return JSON.stringify({
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    });
}

function unixtime(value){
    var d = new Date(value);
    return JSON.stringify({
        unixtime: d.getTime()
    });
}
