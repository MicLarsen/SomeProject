import React, { Component } from 'react'
let Crypto = require('crypto')

class Withcallback extends Component {  

    constructor(props) {
        super(props)
        this.state = {
        }
    }


render() {
    let secureRandoms = {
        "title": "6 Secure Randoms",
        "randoms": []
    }
    let bytes = 24
    let arraySIZE = 6
    let innerArray = []
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
    withCallbacks(bytes, innerArray)
    return (
        <div>
        <h1>Callbacks and Promises Assignment - Periode 5 - Javascript</h1>
        <h2>Before you start, convince yourself that this exercise would be impossible to implement without a way to handle asynchronous behaviour (callbacks, promises, etc.).</h2>
        <h4>1.a) without callbacks or promises etc. there would be race conditions , 
              meaning that we would not be able to control the order of the array</h4>
            <h2>1.b) JSON object created with a recursive Callback function</h2>
            <pre>{JSON.stringify(secureRandoms, null, 6) }</pre>
        </div>
        )
    }
}

module.exports = Withcallback