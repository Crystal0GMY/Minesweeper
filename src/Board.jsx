import React from 'react';
import Cell from './Cell';
import { useGameContext } from "./GameContext";

export default function Board(props) {
    const difficulty = props.difficulty;
    const { board, revealCell, toggleFlag } = useGameContext();
    return (
        <div className="game-board">
            <div>
            <h3>Total Mines: {difficulty.mines}</h3>
            </div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="game-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              rowIndex={rowIndex}
              colIndex={colIndex}
              cell={cell}
              revealCell={revealCell}
              toggleFlag={toggleFlag}
            />
          ))}
        </div>
      ))}
    </div>
    );
}
