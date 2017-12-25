import React, { Component } from 'react'
import UUID from 'uuid'
import QnAItem from './QnAItem'

module.exports = class QnA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            QnA: [],
        }
    }

    render() {
        let item
        if(this.state.QnA) {
            item = this.state.QnA.map(QnA => {
                 return (
                    <QnAItem key={QnA.id} QnA={QnA} /> 
                 )
            })
        }
        return (
            <div className="QnA">
            <h3>Q & A's</h3>
                {item}
            </div>
        )
    }
}


·         Cross-Site Request Forgery (CSRF)
·        SQL Injection
Cross Site Scripting (XSS)


Ensure that you Node-process restarts after a server (Ubuntu) restart
Ensure that you can take advantage of a multi-core system
Ensure that you can run “many” node-applications on a single droplet on the same port (80)
