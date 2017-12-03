import React, { Component } from 'react'
import { Link , BrowserRouter , Route } from 'react-router-dom'
import Home from '../screens/home.jsx'
import Pyramiderouter from '../screens/pyramiderouter.jsx'

class Navbar extends Component {

    render() {

        return (
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
                    <Route exact path="/pyramiderouter" component={Pyramiderouter} />
                  
            </div>      
            </div>
            </BrowserRouter> 
          )
    }
}

module.exports = Navbar 