import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [flags, setFlags] = useState(0);
  const [gameMessage, setGameMessage] = useState("Good luck!");
  const [minesCount, setMinesCount] = useState(0);

  const revealCell = (row, col) => {
    if (gameOver || board[row][col].isRevealed) return;

    const newBoard = [...board];
    if (newBoard[row][col].isFlagged) {
        newBoard[row][col].isFlagged = false;
        setBoard(newBoard);
        return;
    }

    newBoard[row][col].isRevealed = true;

    if (newBoard[row][col].isMine) {
        setGameMessage("Game Over! You lost!");
        setGameOver(true);
    } else if (checkForWin(newBoard)) {
        setGameMessage("Game Over! You Won!");
        setGameOver(true);
    }

    setBoard(newBoard);
};

const toggleFlag = (row, col) => {
    if (gameOver || board[row][col].isRevealed || board[row][col].isFlagged) return;

    const newBoard = [...board];
    newBoard[row][col].isFlagged = true;

    setFlags(flags + 1);
    setBoard(newBoard);
};

const resetGame = (rows, cols, mines) => {
    const newBoard = [];

    for (let row = 0; row < rows; row++) {
        const newRow = [];
        for (let col = 0; col < cols; col++) {
            newRow.push({
                isRevealed: false,
                isMine: false,
                surroundingMines: 0,
                isFlagged: false,
            });
        }
        newBoard.push(newRow);
    }

    let placedMines = 0;
    while (placedMines < mines) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);

        if (!newBoard[randomRow][randomCol].isMine) {
            newBoard[randomRow][randomCol].isMine = true;
            placedMines++;
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (newBoard[row][col].isMine) {
                continue;
            }

            let surroundingMines = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const neighborRow = row + i;
                    const neighborCol = col + j;

                    if (
                        neighborRow >= 0 &&
                        neighborRow < rows &&
                        neighborCol >= 0 &&
                        neighborCol < cols &&
                        newBoard[neighborRow][neighborCol].isMine
                    ) {
                        surroundingMines++;
                    }
                }
            }
            newBoard[row][col].surroundingMines = surroundingMines;
        }
    }
    setBoard(newBoard);
    setGameOver(false);
    setFlags(0);
    setGameMessage("");
};

const checkForWin = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (!board[row][col].isRevealed && !board[row][col].isMine) {
                return false;
            }
        }
    }
    return true;
};

return (
    <GameContext.Provider value={{
      checkForWin, board, setBoard, setMinesCount, resetGame, gameMessage, setGameMessage, minesCount, resetGame, revealCell, toggleFlag
    }}>
      {children}
    </GameContext.Provider>
  );
};