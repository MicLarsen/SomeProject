import React, { Component } from 'react'
import _QnA from './_QnA'

module.exports = class _QnAItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let questionAndAnswer
        if (this.props.item) {
            try {
                questionAndAnswer = this.props.item.qna.map(qaa => {
                    return (
                        <_QnA key={qaa.id} QnA={qaa} />
                    )
                })
            } catch (err) {
                console.error(err)
            }
        }
        return (
            <div className="QnA" >
                {questionAndAnswer}
            </div>
        )
    }
}