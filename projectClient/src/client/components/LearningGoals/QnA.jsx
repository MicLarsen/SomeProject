import React, { Component } from 'react'

module.exports = class _QnA extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log("whatever")
        return (
            <div className="QnA">
                <p className='question'><strong>Q : </strong>{this.props.QnA.question}</p>
                <p className='answer'><strong>A : </strong>{this.props.QnA.answer}</p>
            </div>
        )
    }
}