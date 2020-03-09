import React, { Component } from 'react'
import BarContainer from './BarContainer'
import Button from './Button'

export default class Container extends Component {
    render() {
        return (
            <div>
                <BarContainer />
                <Button buttonType={"Randomize"}/>
                <Button buttonType={"Sort"}/>
                
            </div>
        )
    }
}
