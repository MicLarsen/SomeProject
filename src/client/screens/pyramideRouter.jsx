import React, { Component } from 'react'
import { Link , BrowserRouter , Route } from 'react-router-dom'
import Withcallback from './withcallback.jsx'
import Withoutcallback from './withoutcallback.jsx'
import Windowcontrol from '../components/windowcontrol.jsx'
import 'react-select/dist/react-select.css'


class PyramideRouter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: '',
           
            
          }
          this.handleChange = this.handleChange.bind(this)

    }
      
    
   handleChange(s) {
        this.setState({selected: s.target.value}, console.log(this.state.selected))
      }

     
      
render() {
  let setWindow
  this.settingWindow = () => {
    if(this.state.selected !== 0) {      
    if(this.state.selected === "2" ) {
  this.setWindow =  (<Withcallback />)  
    }
  if(this.state.selected === "3") {
    this.setWindow =  (<Withoutcallback />)  
    }
  }
}

this.settingWindow()
        return (
            <div className="pyramide-wrapper">
              <div>
                <select onChange={this.handleChange}>
                  <option value="1">Please select one</option>
                  <option value="2">With Callbacks</option> 
                  <option value="3">With Promises</option>
                </select>
              </div>
              <div className="pyramide-content">
                {this.setWindow}
              </div>
            </div>
          )
        }
      }

module.exports = PyramideRouter