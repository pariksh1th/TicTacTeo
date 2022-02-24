import React from 'react'

function Square(props) {
    return (
        <button onClick={() => {
            props.clicks(props.position)
        }} className='square'>{props.value}</button>
    )
}

export default Square
