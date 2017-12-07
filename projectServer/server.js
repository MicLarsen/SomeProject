let express = require('express')     
let app = express()
let bodyParser = require('body-parser')
let CreateBytes = require('./src/components/createBytes')                

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let port = process.env.PORT || 8000
let router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });  
})

router.get('/securerandoms',(req,res,err) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    })
    CreateBytes.createBytes(64, (data) =>
    res.send({
            "title": "6 Secure Randoms",
                "randoms": data
            }
        )
    )
})
app.use('/api', router)
app.listen(port)
