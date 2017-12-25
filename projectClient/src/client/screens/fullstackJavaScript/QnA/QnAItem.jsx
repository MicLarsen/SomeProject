import React, { Component } from 'react'

module.exports = class QnAItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
           }
    render() {
        return (
            <li className="QnA">
                <strong>{this.props.QnA.question}:</strong>{this.props.QnA.answer} 
            </li>
        )
    }
}