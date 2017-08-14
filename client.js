var http = require('http');
var qs = require('querystring');
var fs = require('fs-extra');


var post_data = fs.readJSONSync('post-data.json');
var options = fs.readJSONSync('post-options.json');

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body  
var content = qs.stringify(post_data);
console.warn('==>post connect: ' + content);
req.write(content);
req.end();  