let createBytes = require('./createBytes');

let secureRandoms = function() {
    return createBytes.createBytes(64, (data) =>
        {
        return {"title": "6 Secure Randoms","randoms": data}
        }
    )    
}
module.exports = {secureRandoms: secureRandoms}
