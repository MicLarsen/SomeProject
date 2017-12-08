import React, { Component } from 'react'
import { Link } from 'react-router-dom'

module.exports = class Navbar extends Component {
render() {
    return (       
        <div className="App-Navbar">                          
            <div className={"Nav-Item page1 Nav-Item-Active"}>
                <Link className={"Nav-Link"} to={"/Home"}>Home</Link>
            </div> 
            <div className={ "Nav-Item page2 Nav-Item-Active"}>
                <Link className={"Nav-Link"} to={"/securerandoms"}>Pyramide of doom</Link>        
            </div>
            </div>
        )
    }
}