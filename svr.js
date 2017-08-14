var http = require('http');
var querystring = require('querystring');
http.createServer(function (request, response) {
  request.setEncoding('utf-8');
  var postData = '';
  // 注册监听, 接收数据块
  request.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
  });
  // 数据接收完毕, 执行回调函数
  request.addListener("end", function () {
    var params = querystring.parse(postData);  //解析 HEADER 中的数据
    console.log(params);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  });
}).listen(22004, '192.168.0.182');