import React, { Component } from 'react'
import CallApi from '../callApi'

module.exports = class _AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
        }
    }
    componentDidMount() {
        CallApi.callApi('jokes')
        .then((data) => {
            console.log(data)
        this.setState({jokes: data.data})
        })
        .catch(err => console.log('There was an error:' + err))    
    }
    render() {
        let ran = Math.round(Math.random() * (this.state.jokes.length-1))
        console.log(ran)
    return (
            <div className='App-Header scroll-left' >
           <p>{this.state.jokes[ran]}</p>
            </div>
    )
}
}



