import React, { useState } from 'react';
import '../styles/root.scss';
import Board from './Board';
import calculateWinner from './winner';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const massage = winner
    ? `Winner is ${winner} `
    : `Next palyer is ${isNext ? 'X' : 'O'}`;

  const handleClick = position => {
    if (board[position]) return;
    setBoard(perv => {
      return perv.map((Square, pos) => {
        if (position === pos) {
          return isNext ? 'X' : 'O';
        }
        return Square;
      });
    });

    setIsNext(perv => !perv);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
}

export default App;
