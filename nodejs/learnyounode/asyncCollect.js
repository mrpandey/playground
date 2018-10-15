var i=2;
var len = process.argv.length;
var url = '';
var http = require('http');

function print () {
    if(i==len) return;
    url = process.argv[i];
    http.get(url, printResponse);
}

function printResponse (res) {
    var str = '';
    res.setEncoding('utf8');
    res.on('data', function (data){
        str += data;
    });
    res.on('end', function(){
        console.log(str);
        i++;
        print();
    });
}

print();
