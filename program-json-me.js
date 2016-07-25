var express = require("express");
var fs = require("fs");
var port = process.argv[2];
var file = process.argv[3];


var app = express();

app.get('*',function(req,res){
    fs.readFile(file,function(err,data){
        if(err){
            console.log(err);
            res.end();
        }
        res.json(JSON.parse(data));    
    });
});

app.listen(port);

