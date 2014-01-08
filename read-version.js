var fs = require('fs'),
    byline = require('byline');

var stream = byline(fs.createReadStream('/etc/lsb-release', { encoding: 'utf8' }));

stream.on('data', function(line) {
//    Uncomment To prove only first lines where read
//    console.log(line);
    if(line.match(/DISTRIB_CODENAME/)){
        console.log(line.split('=')[1]);
        stream.pause();
    }
});

