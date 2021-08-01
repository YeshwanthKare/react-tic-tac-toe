import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  // console.log(board);

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    // console.log(setBoard);

    setBoard((prev) => {
      // console.log("current board state", prev);
      const newValue = prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
      // console.log("this will be new board", newValue);
      return newValue;
    });
    setIsXNext((prev) => (prev = !prev));
  };

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "O"}`;

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
