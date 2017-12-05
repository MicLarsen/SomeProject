var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');
let Crypto = require('crypto')
let cors = require('cors')

app.use(cors)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 4444

var router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);


let bytes = 24
let arraySIZE = 6
let innerArray = []


router.get('/securerandoms',(req,res,err) => {
    let value = withCallbacks(bytes, innerArray)
    res.json(JSON.stringify(value))    
})

secureRandoms = {
    "title": "6 Secure Randoms",
    "randoms": []
}
var withCallbacks = function (SIZE, array) {
    
    let tempArray = array
    if (array.length === arraySIZE) {
        secureRandoms.randoms = tempArray
        return secureRandoms
    } else {

        tempArray.push(Crypto.randomBytes(SIZE).toString('hex'))
        withCallbacks(SIZE - 4, tempArray)
    }
}

app.listen(port);
console.log('Magic happens on port ' + port);
