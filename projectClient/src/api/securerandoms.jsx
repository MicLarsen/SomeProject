
export default function() {
    array = {
        "title": "6 Secure Randoms",
        "randoms": []
    }

    Promise.all([makeSecureRandom(24), makeSecureRandom(20), makeSecureRandom(16), makeSecureRandom(12), makeSecureRandom(8), makeSecureRandom(4)])
    .then((array) => {
        secureRandom.randoms = array
        return array
    }).catch((error) => {
        //Do something
    })

    securerandoms: (bytesize) => {
        return new Promise((resolve, reject) => {
            array.randoms.push(Crypto.randomBytes(byteSize))
            })
    }

    return array
}


