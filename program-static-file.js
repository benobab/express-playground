var express = require("express");
var http = require("http");
var app = express();
var morgan = require("morgan"); //Logger

var port = process.argv[2];
app.use(morgan('combined'));//Set the logger to the app 

//Made the static file accessible
app.use(express.static(__dirname + '/files'));
app.use(function(res,req){
    
});

app.listen(port);