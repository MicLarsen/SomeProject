import React, { Component } from 'react'
import PeriodeText from './PeriodeText'
let CreateBytes = require('../createBytes')

module.exports = class _WithCallback extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            result:  {
                "CallbackedRandoms": []
            },
        }
    }
componentDidMount() {
    CreateBytes.createBytes(64, (data) => {
        this.setState({result : {CallbackedRandoms : data}})
    })
}
render() {
    return (
        <div>
        <PeriodeText assignment={this.props.assignment} />
        <pre>{JSON.stringify(this.state.result.CallbackedRandoms, null, 6) }</pre>
        </div>
        )
    }
}