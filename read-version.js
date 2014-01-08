var fs = require('fs'),
    byline = require('byline');

var stream = byline(fs.createReadStream('/etc/lsb-release', { encoding: 'utf8' }));

stream.on('data', function(line) {
    console.log(line);
    if(line.match(/DISTRIB_CODENAME/)){
        console.log(line);
        stream.pause();
    }

});

