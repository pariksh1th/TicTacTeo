import React from 'react';

function Square({ onClick, value, winnerSquares }) {
  return (
    <button
      onClick={onClick}
      style={{ fontWeight: winnerSquares ? 'bold' : 'normal' }}
      className="square"
    >
      {value}
    </button>
  );
}

export default Square;
