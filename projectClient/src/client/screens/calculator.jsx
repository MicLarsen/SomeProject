import React, { Component } from 'react'

module.exports = class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue : '0',
        }
    }
 

render() {
    return (
    <div className='calculator'>
        <div className='calc-display'>0</div>
        <div className='calc-keypad'>
            <div className='input-keys'>
                <div className='function-keys'>
                    <button className='calc-key key-clear'>AC</button>
                    <button className='calc-key key-sign'>+-</button>
                    <button className='calc-key key-percent'>%</button>
                </div>
                <div className='digit-keys'>
                    <button className='calc-key key-1'>1</button>
                    <button className='calc-key key-2'>2</button>
                    <button className='calc-key key-3'>3</button>
                    <button className='calc-key key-4'>4</button>
                    <button className='calc-key key-5'>5</button>
                    <button className='calc-key key-6'>6</button>
                    <button className='calc-key key-7'>7</button>
                    <button className='calc-key key-8'>8</button>
                    <button className='calc-key key-9'>9</button>
                    <button className='calc-key key-0'>0</button>
                    <button className='calc-key key-.'>.</button>
                </div>
            </div>
            <div className='operator-keys'>
                <button className='calc-key key-divide'>/</button>
                <button className='calc-key key-multiply'>x</button>
                <button className='calc-key key-subtract'>-</button>
                <button className='calc-key key-add'>+</button>
                <button className='calc-key key-equals'>=</button>
            </div>
        </div>
    </div>
    )
}
}