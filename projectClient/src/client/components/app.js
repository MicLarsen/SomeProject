import React, {Component} from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'
import Todo from '../screens/todo'
import Calculator from '../screens/calculator'
import _Navigation from './design/_navigation'
import _AppHeader from './design/_appHeader'
import SecureRandoms from '../screens/secureRandoms'
require('../styles/app')
require('../styles/calculator')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
    return (
        <div className="App">
            <_AppHeader />        
            <BrowserRouter>
            <div className="App-Wrapper">
                <_Navigation/>
                <div className="Main-Content">
                    <Route exact path="/todo" component={Todo} />    
                    <Route exact path="/calculator" component={Calculator} />
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
