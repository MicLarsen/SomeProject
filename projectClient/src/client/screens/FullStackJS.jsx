import React, { Component } from 'react'
import _Periode1 from './fullstackjavascript/_periode1/learninggoals1'
import _Periode2 from './fullstackjavascript/_periode2/learninggoals2'
import _Periode3 from './fullstackjavascript/_periode3/learninggoals3'
import _Periode4 from './fullstackjavascript/_periode4/learninggoals4'
import _Periode5 from './fullstackjavascript/_periode5/learninggoals5'

module.exports = class FullStackJS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            selectedArray: ['Please select a Periode',
                        <_Periode1 />, 
                        <_Periode2 />,
                        <_Periode3 />,
                        <_Periode4 />,
                        <_Periode5 />
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