import React, { Component } from 'react'
import _QnAItem from './_QnAItem'

module.exports = class _LearningGoals extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let subj
        if (this.props.item) {
                try {
                    subj = this.props.item.map( QnA => {
                        return (
                                <_QnAItem key={QnA.title} item={QnA} />
                        )
                    })
                } catch (err) {
                    console.error(err)
                }
            }
        return (
            <div className="QnA" >
                <h3>{this.props.item.title}</h3>
                {subj}
            </div>
        )
    }
}
