import React, { Component } from 'react'
import _WithCallback from './_withcallback'
import _WithPromises from './_withpromises'
import 'react-select/dist/react-select.css'

module.exports = class SecureRandoms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      selectedArray: [<_WithCallback /> , <_WithPromises />]
    }
    this.handleChange = this.handleChange.bind(this)
  }   
        
  handleChange(s) {
    this.setState({selected: <s.target.value/>})    
  }

render() {
  return (
    <div className="pyramide-wrapper">
      <select onChange={this.handleChange}>
        <option value="0">With Callbacks</option> 
        <option value="1">With Promises</option>
      </select>
      <div className="pyramide-content">
        {this.state.selectedArray[this.state.selected.type]}
      </div>
    </div>
    )
  }
}