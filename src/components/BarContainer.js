import React, { Component } from 'react'
import { connect } from 'react-redux';
import { randomArray } from '../REDUX/Actions/arrayActions'
import Bar from './Bar.js'
import './BarContainer.css'


export class BarContainer extends Component {

    componentDidMount(){
        this.props.randomArray()
    }
    render() {
        console.log(this.props.array);
        

        const renderBars = () => {
            if (this.props.array.length){
                return this.props.array.map( i => {
                    return <Bar height={i} />
                })
            }
        }
        return (
            <div id='bar-container'>
                {renderBars()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    array: state.array
})


export default connect(mapStateToProps, { randomArray })(BarContainer);
