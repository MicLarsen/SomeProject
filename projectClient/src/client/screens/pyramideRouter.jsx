import React, { Component } from 'react'
import Withcallback from './withcallback.jsx'
import Withpromises from './withpromises.jsx'
import 'react-select/dist/react-select.css'

class PyramideRouter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            selectedArray: [<Withcallback /> , <Withpromises />]
          }
          this.handleChange = this.handleChange.bind(this)
    }   
        handleChange(s) {
        this.setState({selected: <s.target.value/>})    
      }

render() {
        return (
            <div className="pyramide-wrapper">
              <div>
                <select onChange={this.handleChange}>
                  <option value="0">With Callbacks</option> 
                  <option value="1">With Promises</option>
                </select>
              </div>
              <div className="pyramide-content">
                {this.state.selectedArray[this.state.selected.type]}
              </div>
            </div>
          )
        }
      }
module.exports = PyramideRouter