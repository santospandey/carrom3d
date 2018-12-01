let express = require('express');

var app = express();

let port = 3000;

app.use('/', express.static(__dirname + '/build/'));

app.listen(port, function(){
    console.log("server is running at port ", port);
});