import React, { useState } from 'react';
import Square from './Square';

function Board({ board, handleClick, winnerSquares }) {
  const renderSquare = pos => {
    const isWinningSquare = winnerSquares.includes(pos);
    return (
      <Square
        value={board[pos]}
        winnerSquares={isWinningSquare}
        onClick={() => handleClick(pos)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
