let crypto = require('crypto')

let createBytes = function (size, callback, result = []) {
    if (size < 2) {
        return callback(result)
    }
    crypto.randomBytes(size, function (err, buf) {
        if (err) {
            return console.log(err)
        }
        result.push({ "length": buf.length, "random": buf.toString('hex') })
        createBytes(size / 2, callback, result);
    })  
}
module.exports = { createBytes: createBytes }