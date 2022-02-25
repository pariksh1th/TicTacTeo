import React, { useState } from 'react';
import Board from './Board';
import '../styles/root.scss';
import calculateWinner from '../winner';
import History from './History';

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);

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

  const moveClick = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board board={current.board} handleClick={handleClick} />
      <History
        history={history}
        moveClick={moveClick}
        currentMove={currentMove}
      />
    </div>
  );
}

export default App;
