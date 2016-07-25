var express = require("express");
var http = require("http");
var app = express();
var morgan = require("morgan"); //Logger

var port = process.argv[2];
//Interpret .styl file and made them .css compiled
app.use(require('stylus').middleware(__dirname + '/stylish-a-little'));
app.use(morgan('combined'));//Set the logger to the app 

//Made the static file accessible
app.use(express.static(__dirname + '/stylish-a-little'));
app.listen(port);