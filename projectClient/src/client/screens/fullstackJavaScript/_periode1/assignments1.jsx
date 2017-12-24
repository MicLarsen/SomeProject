import React, { Component } from 'react'
import A1_Components from './a1_components'

module.exports = class P1A extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            namesArray : ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik','Gudrun', 'Ib', 'Tove'],
            arrayString: "['Lars', 'Jan', 'Peter', 'Bo', 'Frederik','Gudrun', 'Ib', 'Tove']",
            showArray: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(s) {
        switch(s.target.value) {
            case '1': this.setState({showArray: this.state.namesArray.filter(name => name.length < 3 ) + " "})
                    break
            case '2': this.setState({showArray: this.state.namesArray.filter(name => name.length > 3 ) + " "})
                    break
            case '3': this.setState({showArray: this.state.namesArray.map(name => name.toUpperCase()) + " "})
                    break
            case '5': this.setState({showArray: <A1_Components /> })
                    break
            default: break 
        }
    }
    render() {
        return(
            <div>
                <div>
                {this.state.arrayString}
                </div>
                <div className='Learning-Content'>
                    <select onChange={this.handleChange}>
                        <option value='0'>Select on please</option>
                        <option value='1'>less than 3</option> 
                        <option value='2'>more than 3</option>
                        <option value='3'>Uppercase</option>
                        <option value='4'>JS - Periode 4</option>
                        <option value='5'>My Costum Prototypes</option>
                    </select>
                </div>
                <div className='Learning-Content'>
                    {this.state.showArray}
                </div>
            </div>
        )
    }

}