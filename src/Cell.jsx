import React from "react";
import { useGameContext } from "./GameContext";

export default function Cell({ rowIndex, colIndex, cell, revealCell, toggleFlag }) {
  return (
    <div
      className={`game-cell ${cell.isRevealed ? "revealed" : ""} ${cell.isFlagged ? "flagged" : ""}`}
      onClick={() => revealCell(rowIndex, colIndex)}
      onContextMenu={(e) => {
        e.preventDefault();
        toggleFlag(rowIndex, colIndex);
      }}
    >
      {cell.isRevealed && cell.isMine ? (
        <span className="mine">💣</span>
      ) : cell.isRevealed ? (
        cell.surroundingMines > 0 ? (
          <span>{cell.surroundingMines}</span>
        ) : (
          <span className="empty"></span>
        )
      ) : cell.isFlagged ? (
        <span className="flag">🚩</span>
      ) : (
        ""
      )}
    </div>
  );
}
