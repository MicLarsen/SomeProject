import React, { Component } from 'react'
import Axios from 'axios'
import CallApi from '../components/callApi'

module.exports = class _WithPromises extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            result:  {
                "title": "6 Secure Randoms",
                "randoms": []
            },
        }
    }
componentDidMount() {
        CallApi.callApi('securerandoms')
        .then((data) => {
            this.setState({result : {randoms : data}})
        })
    .catch(err => console.log('There was an error:' + err))
        }
render() {
    return (
        <div>
        <h1>Callbacks and Promises Assignment - Periode 5 - Javascript</h1>
            <h2>1.c) JSON Object created with a Promise function</h2>
            <pre>{JSON.stringify(this.state.result, null, 6) }</pre>
        </div>
        )
    }
}