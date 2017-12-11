import Axios from 'axios'

let CallApi = function(route) {
    return new Promise((resolve, reject) => {
        Axios.get('http://localhost:8000/api/' + route).
        then((data) => {
            data !== null ? resolve(data) : reject('some error happened')
        })    
        })
    }
module.exports = {callApi: CallApi};