var dir = process.argv[2];
var ext = process.argv[3];

var lsmodule = require('./lsmodule');

function printls(err, list) {
    if(err) console.error(err);

    list.forEach(function(fname){
        console.log(fname);
    });
}

lsmodule(dir, ext, printls);
