import React, { Component } from 'react'
import Periode from './fullstackJavaScript/periode'

module.exports = class FullStackJS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            selectedArray: ['Please select a Periode',
                        <Periode periode={1}/>, 
                        <Periode periode={2}/>,
                        <Periode periode={3}/>,
                        <Periode periode={4}/>,
                        <Periode periode={5}/>
                    ],
        }
    this.handleChange = this.handleChange.bind(this)
    }   
    
    handleChange(s) {
        this.setState({selected: <s.target.value/>})    
    }
    render() {
        return (
            <div className='FullstackJS-Wrapper'>
                <select onChange={this.handleChange}>
                    <option value='0'>Select on please</option>
                    <option value='1'>JS - Periode 1</option> 
                    <option value='2'>JS - Periode 2</option>
                    <option value='3'>JS - Periode 3</option>
                    <option value='4'>JS - Periode 4</option>
                    <option value='5'>JS - Periode 5</option>
            </select>
            <div className='FullstackJS-Content'>
                {this.state.selectedArray[this.state.selected.type]}
            </div>
        </div>
        )
    }
}