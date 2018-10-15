var url = process.argv[2];
var http = require('http');

http.get(url, function print(res) {
    var str = '';
    res.setEncoding('utf8');
    res.on('data', function (data){
        str += data;
    });
    res.on('end', function(){
        console.log(str.length);
        console.log(str);
    });
});
