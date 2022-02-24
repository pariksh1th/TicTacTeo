import React, { useState } from 'react'
import Square from './Square'

function Board() {


    const [board, setBoard] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(false)

    const handleClick = position => {

        if (board[position]) return
        setBoard((perv) => {
            return perv.map((Square, pos) => {
                if (position === pos) {
                    return isNext ? "X" : "O"
                }
                return Square
            })
        })

        setIsNext(perv => !perv)
    }

    const renderSquare = pos => {
        return <Square value={board[pos]} clicks={handleClick} position={pos} />
    }
    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}

            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>
        </div>
    )
}

export default Board