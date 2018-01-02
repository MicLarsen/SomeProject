import React, { Component } from 'react'
let CreateBytes = require('../components/createBytes')

module.exports = class _WithCallback extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            title: "6 Secure Randoms with Callback",
            result:  {
                "CallbackedRandoms": []
            },
        }
    }
componentDidMount() {
    CreateBytes.createBytes(64, (data) => {
        this.setState({result : {CallbackedRandoms : data}})

        console.log(this.state.result)
    })
}
render() {
    return (
        <div>
        <h1>Callbacks and Promises Assignment - Periode 5 - Javascript</h1>
        <h2>Before you start, convince yourself that this exercise would be impossible to implement without a way to handle asynchronous behaviour (callbacks, promises, etc.).</h2>
        <h4>1.a) without callbacks or promises etc. there would be race conditions , 
              meaning that we would not be able to control the order of the array</h4>
            <h2>1.b) {this.state.ytitle}</h2>
            <pre>{JSON.stringify(this.state.result, null, 6) }</pre>
        </div>
        )
    }
}