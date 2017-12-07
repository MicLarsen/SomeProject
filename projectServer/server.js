var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');
let Crypto = require('crypto')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8008

var router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);


let bytes = 40
let arraySIZE = 6
let array = []

router.get('/securerandoms',(req,res,err) => {  
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      })
    withCallbacks(bytes, array , function(data) {
        console.log("this is data: ")
        console.log(data)
        let someData = [] = data
      res.send({
          "title": "6 Secure Randoms",
          "randoms": someData
      })
    })
    })

let withCallbacks = (size, array, callback ) => {
    let tempArray = array 
    if (tempArray.length === 6) {
        callback(tempArray)
    } else {
        tempArray.push(Crypto.randomBytes(size).toString('hex'))
        withCallbacks(size - 4, tempArray)
    }
}

app.listen(port);
console.log('Magic happens on port ' + port);
