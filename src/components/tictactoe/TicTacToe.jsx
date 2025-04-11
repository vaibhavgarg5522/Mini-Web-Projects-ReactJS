import React, { useState } from 'react';
import Square from './Square';

const TicTacToe = () => {
  const [num, setNum] = useState([...Array(9).fill(null)]);
  const [condition, setCondition] = useState(true);

  const checkWinnerFunction = () => {
    let winner = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < winner.length; i++) {
      let [a, b, c] = winner[i];
      if (num[a] !== null && num[a] === num[b] && num[a] === num[c]) {
        return num[a];
      }
    }
    return false;
  };

  const handleClick = (index) => {
    if (num[index] !== null) return;
    let copyArray = [...num];
    copyArray[index] = condition ? 'X' : '0';
    setNum(copyArray);
    setCondition(!condition);
  };

  let result = checkWinnerFunction();

  const play = () => {
    setNum([...Array(9).fill(null)]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-white to-purple-300 px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center bg-gradient-to-l from-white via-purple-300 to-white rounded py-2 px-6">
        Tic Tac Toe
      </h1>

      <h2 className="text-xl sm:text-2xl text-red-800 font-semibold mt-4 sm:mt-5">
        {condition ? 'X' : '0'} -- Your Turn
      </h2>

      {result ? (
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-4xl sm:text-6xl animate-bounce bg-gradient-to-b from-white to-purple-300 rounded-full py-4 px-8 shadow-2xl">
            {result} is the winner
          </h1>
          <button
            className="mt-6 px-6 py-2 bg-purple-800 text-white rounded-full shadow-lg hover:bg-purple-900 transition-all duration-300"
            onClick={play}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 bg-indigo-50 p-4 rounded-2xl w-full max-w-[500px] aspect-square">
          {num.map((val, i) => (
            <Square key={i} value={val} onClick={() => handleClick(i)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
