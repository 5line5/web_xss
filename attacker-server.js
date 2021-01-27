var http = require('http');
var fs = require('fs');
var url = require('url');
var server = new http.Server();


var server = new http.Server(function(req, res){
console.log ( req.headers );

var urlParsed = url.parse(req.url, true);

if(urlParsed.pathname == '/img' && urlParsed.query.cookie){
    console.log('aaaaa')
    res.end(urlParsed.query.cookie);
}  else {
    res.statusCode = 404; // Not Found
    res.end("Not Found(((");
}
});


server.listen(4200, '127.0.0.1');