import React, { Component } from 'react'
import { Link , BrowserRouter , Route } from 'react-router-dom'
import Withcallback from './withcallback.jsx'
import Withpromises from './withpromises.jsx'
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
        this.setState({selected: <s.target.value/>})
      }

render() {


  let setWindow = this.setWindow
  if(this.state.selected === "1" ? 
    this.setWindow = <Withcallback /> :
    this.setWindow = <Withpromises />)

        return (
            <div className="pyramide-wrapper">
              <div>
                <select onChange={this.handleChange}>
                  <option value="1">With Callbacks</option> 
                  <option value="">With Promises</option>
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