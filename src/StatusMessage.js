import React from "react";

const StatusMessage = ({ current, winner }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next Player is ${current.isXNext ? "X" : "O"}`;

  const noMovesLeft = current.board.every((el) => el !== null);

  return (
    <h2>
      {winner && (
        <>
          {" "}
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> tied
        </>
      )}
    </h2>
  );
};

export default StatusMessage;
