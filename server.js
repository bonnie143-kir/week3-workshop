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

app.get('/', function(req,res){
    res.sendFile(__dirname + '/www/homepage.html');
});

app.get('/accountDetails', function(req, res){
    res.sendFile(__dirname + 'www/accountDetails.html');
});

app.post('/api/login', function(req, res){
    let users = [{'email': 'bongii@outmail.com', 'pwd': 'bongii'}, {'email': 'abcd@efg.com':'pwd':'hijk'}, {'email':'12345@sixseven.com', 'pwd': 1234}];

    if (!req.body){
        return res.sendStatus(400)
    }
        var user = {};
        user.email = req.body.email;
        user.upwd = req.body.upwd;
        user.valid = false;
    for (let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.upwd == users[i].pwd){
            user.valid = true;
        }
    }   
        res.send(user);
});