import React, {Component} from 'react'
import ReacDOM, { render } from 'react-dom'
import Navigation from './navigation.jsx'


class App extends Component {
render() {
    return (
        <div className="App">
            <div className="App-Header"></div>        
            <Navigation/>
                </div> 
        )
    }
}

module.exports = App