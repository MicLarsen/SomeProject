import React, { Component } from 'react'
import _WithCallback from './_withcallback'
import _WithPromises from './_withpromises'
import _AsyncAwaits from './_AsyncAwaits'
import 'react-select/dist/react-select.css'

module.exports = class SecureRandoms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      selectedArray: ['Please select an option',
                      <_WithCallback />,
                      <_WithPromises />,
                      <_AsyncAwaits />,]
    }
    this.handleChange = this.handleChange.bind(this)
  }   
        
  handleChange(s) {
    this.setState({selected: <s.target.value/>})    
  }

render() {
  return (
    <div className='secureRandom-wrapper'>
      <select onChange={this.handleChange}>
        <option value='0'>Select on please</option>
        <option value='1'>With Callbacks</option> 
        <option value='2'>With Promises</option>
        <option value='3'>Async Awaits</option>
      </select>
      <div className='secureRandom-content'>
        {this.state.selectedArray[this.state.selected.type]}
      </div>
    </div>
    )
  }
}