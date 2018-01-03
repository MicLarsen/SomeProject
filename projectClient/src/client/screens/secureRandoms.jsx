import React, { Component } from 'react'
import Randoms from '../components/periode5/randoms'
import _AsyncAwaits from '../components/periode5/AsyncAwaits'
import _WithCallback from '../components/periode5/withCallBack'
import _WithPromises from '../components/periode5/withPromises'
import 'react-select/dist/react-select.css'

module.exports = class SecureRandoms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      component: [],
    }
    this.handleChange = this.handleChange.bind(this)
  };
  
  handleChange(newProp) {
    let assignment = newProp.target.value.slice(2,newProp.target.value.length)
    if(newProp.target.value !== this.state.selected) {
      this.setState({ selected: newProp.target.value[0] })
    }
    this.setState({ component: [<h2 className="alert">please select an option above</h2>, 
    <_WithCallback assignment={assignment}/>,
    <_WithPromises assignment={assignment} />,
    <_AsyncAwaits assignment={assignment} />,]})
  }

render() {
    return (
    <div className='secureRandom-wrapper'>
      <select onChange={this.handleChange}>
        <option value={[0,'']}>Select on please</option>
        <option value={[1,'Callback']}>With Callbacks</option> 
        <option value={[2,'Promises']}>With Promises</option>
        <option value={[3,'Async Awaits']}>Async Await</option>
      </select>
      <div className='secureRandom-content'>
      {this.state.selected === '' ? <h2 className="alert">please select an option above</h2> : this.state.component[this.state.selected]}
      </div>
    </div>
    )
  }
}