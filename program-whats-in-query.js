var express = require("express");
var url = require('url');
var port = process.argv[2];

var app = express();

app.get('/search',function(req,res){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
   var jsonToReturn = {};
   for(var param in query){
       console.log(param);
       jsonToReturn[param] = query[param];
   };
   console.log(JSON.stringify(jsonToReturn));
   res.end(JSON.stringify(jsonToReturn));
});

app.listen(port);



