import React from 'react';

function History({ history, currentMove, moveClick }) {
  return (
    <div>
      <ul>
        {history.map((_, move) => {
          return (
            <li>
              <button
                style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
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
