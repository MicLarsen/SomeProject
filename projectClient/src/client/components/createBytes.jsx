const crypto = require('crypto');

let createBytes = function (size, cb, result = []) {
    if (size < 2) {
        return cb(result);
    }
    crypto.randomBytes(size, function (err, buf) {
        if (err) {
            return console.log(err)
        }
        result.push({ "length": buf.length, "random": buf.toString('hex') })
        createBytes(size / 2, cb, result);
    })  
}
module.exports = { createBytes: createBytes };