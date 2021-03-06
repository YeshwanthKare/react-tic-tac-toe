import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import { calculateWinner } from "./components/helper";
import "./styles/root.scss";
import StatusMessage from "./components/StatusMessage";

const App = () => {
  const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  // const [isXNext, setIsXNext] = useState(false);
  // console.log(board);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);
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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        className={`btn-reset ${winner ? "active" : ""}`}
        type="button"
        onClick={() => {
          onNewGame();
        }}
      >
        Start new Game
      </button>
      <h2
        style={{
          fontWeight: "normal",
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
