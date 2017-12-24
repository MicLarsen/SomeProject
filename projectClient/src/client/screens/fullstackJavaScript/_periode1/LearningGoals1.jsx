import React, { Component } from 'react'
import CallApi from '../../../components/callApi'
import Ass1 from './assignments1'

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
                this.setState({ result: data.data})
            })
            .catch(err => console.log('There was an error:' + err))
    }

    render() {
        return ( 
            <div className='Learning-Content'>
                <div className='Learning-Content'>
                    {JSON.stringify(this.state.result,null)}
                </div>
                <div className='Learning-Content'>
                    <Ass1/>
                </div>    
            </div>
        )
    }
}