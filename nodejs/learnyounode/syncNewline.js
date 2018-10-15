var file = process.argv[2];
var fs = require('fs');
var buff = fs.readFileSync(file, {encoding: 'utf8'});
var ctr=0;

for(var i=0; i<buff.length; i++) {
    if(buff[i]=='\n') ctr++;
}

console.log(ctr);
//console.log(buff.split('\n').length-1);
