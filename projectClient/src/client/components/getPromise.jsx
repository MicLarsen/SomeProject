import Axios from 'axios'
let CreateBytes = require('./createBytes')

let getPromise = function(route) {
    console.log(route)
    return new Promise((resolve, reject) => {
        Axios.get('http://localhost:8000/api/securerandoms').
        then((data) => {
            data !== null ? resolve(data) : reject('some error happened')
        })    
        })
    }
module.exports = {getPromise: getPromise};