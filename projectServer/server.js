var express = require('express');       
var app = express();
var bodyParser = require('body-parser');
var CreateBytes = require('./src/components/createBytes');                


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/securerandoms',(req,res,err) => {
    console.log("hey there entering server");  
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    });
    CreateBytes.createBytes(64, (data) =>
    res.send(
            {
            "title": "6 Secure Randoms",
                "randoms": data
            }
        )
    );
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);


