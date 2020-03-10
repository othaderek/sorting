import React, { Component } from 'react'
import BarContainer from './BarContainer'
import Button from './Button'
import { connect } from 'react-redux';
import { randomArray, sortArray } from '../REDUX/Actions/arrayActions'
import mergeSort from '../sorts/mergeSort.js';

export class Container extends Component {

    handleClick = (e) => {
        // console.log(this.props);
        
        if (e.target.innerText === "Randomize"){
            this.props.randomArray()
        } else if (e.target.innerText === "Sort"){
            this.props.sortArray(mergeSort(this.props.array))
            // animateSort()
            console.log(this.props.array);
        }
        
    }


    render() {
        // console.log(this.props);
        
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
    array: state.array
})

export default connect(mapStateToProps, { randomArray, sortArray })(Container);