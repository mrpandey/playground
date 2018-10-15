var file = process.argv[2];
var fs = require('fs');
var ctr=0;

function countNewline(callback) {
    fs.readFile(file, {encoding: 'utf8'}, function count(err, data) {
        for(let i=0; i<data.length; i++) {
            if(data[i]=='\n') ctr++;
        }
        callback();
    });
}

function showCtr() {
    console.log(ctr);
}

countNewline(showCtr);
