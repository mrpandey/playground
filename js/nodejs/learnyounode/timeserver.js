var port = Number(process.argv[2]);
var net = require('net');

var server = net.createServer(function (socket) {
    return socket.end(getFormattedDate());
});

server.listen(port);

function getFormattedDate(){
    var d = new Date();
    var ret = '';

    ret += d.getFullYear();
    ret += '-' + twoDigit(d.getMonth()+1);
    ret += '-' + twoDigit(d.getDate());
    ret += ' ' + twoDigit(d.getHours());
    ret += ':' + twoDigit(d.getMinutes());
    return ret + '\n';
}

function twoDigit (d) {
    if(d<10) return '0'+d;
    return ''+d;
}
