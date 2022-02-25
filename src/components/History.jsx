import React from 'react';

function History({ history, currentMove, moveClick }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                key={move}
                onClick={() => {
                  moveClick(move);
                }}
              >
                {move === 0 ? 'Go to start' : `Go to Move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
