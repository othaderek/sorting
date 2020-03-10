import React from 'react'

export default function Bar(props) {
    let divStyle = {
        backgroundColor: '#70baff',
        width: '5px',
        height: props.height
    }
    return (
        <div style={divStyle} className='bar'>
            
        </div>
    )
}
