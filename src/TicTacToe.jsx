import React, { useState } from 'react';

const TicTacToe = () => {
  const initialGrids = Array(9).fill().map(() => Array(9).fill(null));
  const [grids, setGrids] = useState(initialGrids);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [activeGrid, setActiveGrid] = useState(Array(9).fill(true));
  const [winners, setWinners] = useState(Array(9).fill(null));

  const checkWinner = (grid) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  };

  const makeMove = (gridIndex, cellIndex) => {
    if (grids[gridIndex][cellIndex] || !activeGrid[gridIndex]) return;
    const newGrids = grids.map((grid, i) => 
      i === gridIndex ? [...grid.slice(0, cellIndex), currentPlayer, ...grid.slice(cellIndex + 1)] : grid
    );

    setGrids(newGrids);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    const winner = checkWinner(newGrids[gridIndex]);
    if (winner) {
      const newWinners = [...winners];
      newWinners[gridIndex] = winner;
      setWinners(newWinners);
    }

    const nextActiveGrid = newGrids[cellIndex].every(cell => cell !== null) || winners[cellIndex] ? 
                           Array(9).fill(true).map((_, i) => !winners[i]) : 
                           Array(9).fill(false).map((_, i) => i === cellIndex);

    setActiveGrid(nextActiveGrid);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200">
      <div className="grid grid-cols-3 gap-6">
        {grids.map((smallGrid, gridIndex) => (
          <div key={gridIndex} className={`relative transition duration-300 ease-in-out transform hover:scale-105 ${!activeGrid[gridIndex] ? 'opacity-50' : 'opacity-100'}`}>
            <div className="bg-white p-3 shadow-lg rounded-lg">
              <div className="grid grid-cols-3 gap-1">
                {smallGrid.map((value, cellIndex) => (
                  <button key={cellIndex} 
                          className={`w-20 h-20 flex justify-center items-center cursor-pointer transition-colors duration-200
                            ${value === 'X' ? 'bg-red-500 text-white' : value === 'O' ? 'bg-blue-500 text-white' : 'bg-gray-50 hover:bg-gray-200'}`}
                          disabled={!activeGrid[gridIndex]}
                          onClick={() => makeMove(gridIndex, cellIndex)}>
                    <span className="text-2xl font-bold">{value}</span>
                  </button>
                ))}
              </div>
            </div>
            {winners[gridIndex] && (
              <div className="absolute inset-0 bg-opacity-75 flex justify-center items-center text-4xl font-bold text-white rounded-lg"
                   style={{ backgroundColor: winners[gridIndex] === 'X' ? 'rgba(255, 0, 0, 0.75)' : 'rgba(0, 0, 255, 0.75)' }}>
                {winners[gridIndex]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
