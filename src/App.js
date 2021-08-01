import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  // const [isXNext, setIsXNext] = useState(false);
  // console.log(board);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXNext ? "X" : "O"}`;

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    // console.log(setBoard);

    setHistory((prev) => {
      // console.log("current board state", prev);

      const last = prev[prev.length - 1];

      const newValue = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      // console.log("this will be new board", newValue);
      return prev.concat({ board: newValue, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
    // setIsXNext((prev) => (prev = !prev));
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
