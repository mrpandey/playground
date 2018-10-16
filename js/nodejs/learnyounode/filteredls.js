var dir = process.argv[2];
var ext = '.'+process.argv[3];
var fs = require('fs')

function readDir () {
    fs.readdir(dir, function listFiles(err, list) {
        var fileExt = '';
        var l = ext.length;

        list.forEach(function ls(fname) {
            fileExt = fname.substring(fname.length-l);
            if(fileExt==ext) console.log(fname);
        });
    });
}

readDir();
