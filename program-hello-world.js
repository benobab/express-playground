var port = process.argv[2];

var express = require("express");
var http = require("http");
var app = express();

app.use(function(req,res){
    if(req.url === "/home"){
        res.writeHead(200,{ "Content-Type": "text/plain" });
        res.end("Hello World!");
    }else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

http.createServer(app).listen(port);



