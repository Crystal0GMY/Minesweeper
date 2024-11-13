import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Game.css';
import { Link } from 'react-router-dom';
import { useGameContext } from "./GameContext";
import Board from './Board';

export default function Game()  {
    const { difficulty } = useParams();
    const { board, gameMessage, resetGame, minesCount, setMinesCount } = useGameContext();

    const difficultyConfig = {
        easy: { rows: 8, cols: 8, mines: 10 },
        medium: { rows: 16, cols: 16, mines: 40 },
        hard: { rows: 30, cols: 16, mines: 99 }
    };

    useEffect(() => {
        const { rows, cols, mines } = difficultyConfig[difficulty];
        setMinesCount(mines);
        resetGame(rows, cols, mines);
    }, [difficulty]);


    return (
        <div className="game">
      <header className="game-header">
        <h1>Minesweeper</h1>
        <div className="game-message">{gameMessage}</div>
        <button onClick={() => resetGame(difficultyConfig[difficulty].rows, difficultyConfig[difficulty].cols, minesCount)}>
          Reset
        </button>
        <div className="difficulty-links">
          <Link to="/game/easy">Easy</Link>
          <Link to="/game/medium">Medium</Link>
          <Link to="/game/hard">Hard</Link>
        </div>
      </header>
      <Board difficulty={difficultyConfig[difficulty]}/>
    </div>
    )
}