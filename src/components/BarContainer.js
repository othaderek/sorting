import React, { Component } from 'react'
import mergeSort from '../sorts/mergeSort.js';

export class BarContainer extends Component {

    state ={
        randomizedArray: []
    }

    render() {
        return (
            <div id='bar-container'>
                
            </div>
        )
    }
}
console.log(mergeSort([13,12,5,0,-1]));

export default BarContainer
