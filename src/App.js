import React, { useState } from "react";
import Board from "./components/Board";
import History from "./History";
import { calculateWinner } from "./helper";
import "./styles/root.scss";
import StatusMessage from "./StatusMessage";

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

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
