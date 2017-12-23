import React, { Component } from 'react'
import CallApi from '../../../components/callApi'

module.exports = class LearningGoals1 extends Component {

constructor() {
    super()
    this.state = {
        result: [],
    }
}

    componentDidMount() {
        CallApi.callApi('learninggoals')
            .then((data) => {
                console.log(data.data)
                this.setState({ result: data.data})
            })
            .catch(err => console.log('There was an error:' + err))
    }

    render() {
        return ( 
            <div>{JSON.stringify(this.state.result,null)}</div>
        )
    }
}