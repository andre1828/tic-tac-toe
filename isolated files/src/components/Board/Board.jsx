//@ts-check

import { useState } from "react";
import React from "react";

import "./Board.css";
import Square from "../Square/Square";
import { isDraw, isVictory } from "../../utils";

const Board = () => {
  const [squareValues, setSquareValues] = useState(new Array(9).fill("_"));
  const [isX, setIsEx] = useState(true);

  const handleClick = (index) => {
    setSquareValues(
      squareValues.map((value, i) => {
        if (i === index && value === "_") return isX === true ? "X" : "O";

        return value;
      })
    );

    setIsEx(!isX);
  };

  const restartGame = () => {
    setSquareValues(squareValues.map(() => "_"));
    setIsEx(true);
  };

  return (
    <>
      {isVictory(squareValues) && <p>Victory!</p>}
      {isDraw(squareValues) && <p>Draw!</p>}
      <div>
        <Square value={squareValues[0]} onClick={() => handleClick(0)} />
        <Square value={squareValues[1]} onClick={() => handleClick(1)} />
        <Square value={squareValues[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squareValues[3]} onClick={() => handleClick(3)} />
        <Square value={squareValues[4]} onClick={() => handleClick(4)} />
        <Square value={squareValues[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squareValues[6]} onClick={() => handleClick(6)} />
        <Square value={squareValues[7]} onClick={() => handleClick(7)} />
        <Square value={squareValues[8]} onClick={() => handleClick(8)} />
      </div>
      <button className="restart-button" onClick={restartGame}>
        Restart game
      </button>
    </>
  );
};

export default Board;
