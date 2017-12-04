import React, { Component } from 'react'
import { Link , BrowserRouter , Route } from 'react-router-dom'
import Home from '../screens/home.jsx'
import Pyramiderouter from '../screens/pyramiderouter.jsx'
import SecureRandoms from '../../api/securerandoms.jsx'

class Navbar extends Component {

    render() {

        return (
            <div className="App">
            <div className="App-Header"></div>        
            
            <BrowserRouter>
            <div className="App-Wrapper">
            <div className="App-Navbar">
                             
                        <div 
                        className={"Nav-Item page1 Active-Nav"}>
                        <Link to={"/Home"}>Home</Link>
                        </div> 
                        <div className={ "Nav-Item page2 Active-Nav"}>
                            <Link to={"/pyramiderouter"}>Pyramide of doom</Link>            
                        </div>
                    
                  
                </div>
                <div className="Main-Content">
                    <Route exact path="/home" component={Home} />
                    <Route path="/pyramiderouter" component={Pyramiderouter} />
                    <Route path="/api/securerandoms" component={SecureRandoms} />
                  
            </div>      
            </div>
            </BrowserRouter> 
            </div>
          )
    }
}

module.exports = Navbar 