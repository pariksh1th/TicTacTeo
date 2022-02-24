import React, { useState } from 'react';
import '../styles/root.scss';
import Board from './Board';
import calculateWinner from './winner';

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  console.log(winner);
  console.log(current);

  const massage = winner
    ? `Winner is ${winner} `
    : `Next palyer is ${current.isNext ? 'X' : 'O'}`;

  const handleClick = position => {
    if (current.board[position] || winner) return;
    setHistory(perv => {
      const last = perv[perv.length - 1];
      const newBoard = last.board.map((Square, pos) => {
        if (position === pos) {
          return last.isNext ? 'X' : 'O';
        }
        return Square;
      });
      return perv.concat({ board: newBoard, isNext: !last.isNext });
    });

    setCurrentMove(perv => perv + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board board={current.board} handleClick={handleClick} />
    </div>
  );
}

export default App;
