import React, {Component} from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from '../screens/home'
import Navigation from './design/_navigation'
import AppHeader from './design/_appheader'
import SecureRandoms from '../screens/secureRandoms'
require('../css/app')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
render() {
    return (
        <div className="App">
            <ApppHeader />        
            <BrowserRouter>
            <div className="App-Wrapper">
                <Navigation/>
                <div className="Main-Content">
                    <Route exact path="/home" component={Home} />
                    <Route path="/securerandoms" component={SecureRandoms} />
                </div>
            </div>    
            </BrowserRouter>
        </div> 
        )
    }
}
render(
    <App/>, document.getElementById('root')
)
