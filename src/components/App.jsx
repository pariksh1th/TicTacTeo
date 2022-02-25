import React, { useState } from 'react';
import Board from './Board';
import '../styles/root.scss';
import calculateWinner from '../winner';
import History from './History';
import StatusMassage from './StatusMassage';

const NEW_GAME = [{ board: Array(9).fill(null), isNext: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winnerSquares } = calculateWinner(current.board);

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

  const startNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMassage winner={winner} current={current} />
      <Board
        board={current.board}
        winnerSquares={winnerSquares}
        handleClick={handleClick}
      />
      <button
        className={`btn-reset ${winner && 'active'}`}
        onClick={startNewGame}
      >
        Start New Game
      </button>
      <h2 style={{ fontWieght: 'normal' }}>Current game history</h2>
      <History
        history={history}
        moveClick={moveClick}
        currentMove={currentMove}
      />
      <div className="bg-balls" />
    </div>
  );
}

export default App;
