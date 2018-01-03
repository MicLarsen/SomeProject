import React, { Component } from 'react'
import PeriodeText from './PeriodeText'
import Axios from 'axios'
import CallApi from '../callApi'

module.exports = class _WithPromises extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            PromisedRandoms: [],
        }
    }
componentDidMount() {
        CallApi.callApi('securerandoms')
        .then((data) => {
            this.setState({PromisedRandoms : data})
        })
    .catch(err => console.log('There was an error:' + err))
        }
render() {
    return (
        <div>
        <PeriodeText assignment={this.props.assignment} />
            <pre>{JSON.stringify(this.state.PromisedRandoms, null, 6) }</pre>
        </div>
        )
    }
}