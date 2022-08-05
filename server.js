var express = require('express'); //used for routing
var app = express();
var bodyParser = require('body-parser'); // create an instance of body parser

app.use(bodyParser.json());

app.use(express.static(__dirname+'/www'));

app.listen(3000, ()=>{
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has started listening at: ' + n + ":" +m); 
});