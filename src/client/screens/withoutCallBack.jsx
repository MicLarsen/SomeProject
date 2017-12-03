import React from 'react'
import ReactDOM from 'react-dom'

class Withoutcallback extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    
    render() {
        return (
            <div>This is without Callback</div>
        )
    }
}

module.exports = Withoutcallback