var fs = require('fs');

module.exports = function (dir, ext, callback) {
    var ls = [];
    var dotext = '.'+ext;
    var len = dotext.length;

    fs.readdir(dir, function (err, list) {
        //early return
        if(err) return callback(err);

        list.forEach(function (file) {
            if(file.substring(file.length-len) == dotext){
                ls.push(file);
            }
        });
        
        callback(null, ls);
    });
}
