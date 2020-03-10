import React, { Component } from 'react'
import BarContainer from './BarContainer'
import Button from './Button'
import { connect } from 'react-redux';
import { randomArray } from '../REDUX/Actions/arrayActions'
// import mergeSort from '../sorts/mergeSort.js';

export class Container extends Component {

    handleClick = (e) => {
        // console.log(this.props);
        
        
        if (e.target.innerText === "Randomize"){
            this.props.randomArray()
        }
        
    }


    render() {
        return (
            <div>
                <BarContainer randomizeArray={null}/>
                <Button buttonType={"Randomize"} handleClick={this.handleClick}/>
                <Button buttonType={"Sort"} handleClick={this.handleClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    array: state.array.items
})

export default connect(mapStateToProps, { randomArray })(Container);