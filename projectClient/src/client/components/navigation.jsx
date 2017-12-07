import React, { Component } from 'react'
import { Link } from 'react-router-dom'

module.exports = class Navbar extends Component {
render() {
    return (       
        <div className="App-Navbar">                          
            <div className={"Nav-Item page1 Active-Nav"}>
                <Link to={"/Home"}>Home</Link>
            </div> 
            <div className={ "Nav-Item page2 Active-Nav"}>
                <Link to={"/securerandoms"}>Pyramide of doom</Link>        
            </div>
            </div>
        )
    }
}