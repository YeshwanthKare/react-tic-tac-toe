import React from "react";

const StatusMessage = ({ current, winner }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next Player is ${current.isXNext ? "X" : "O"}`;

  const noMovesLeft = current.board.every((el) => {
    el !== null;
  });

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMovesLeft && `Player X and Player O tied`}
    </h2>
  );
};

export default StatusMessage;
