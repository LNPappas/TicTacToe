import React, { useState } from "react";
import Players from "./components/Players";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameLog from "./components/GameLog";
import { WINNING_COMBINATIONS, INITIAL_BOARD, INITIAL_PLAYERS } from "./utils";
import GameOver from "./components/GameOver";

function getActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}

function getWinner(gameBoard, players) {
  let winner;
  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  });
  return winner;
}

function getGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_BOARD.map((inner) => [...inner])];

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = getGameBoard(gameTurns);
  const activePlayer = getActivePlayer(gameTurns);
  const winner = getWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = getActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players
          activePlayer={activePlayer}
          onPlayerNameChange={handlePlayerNameChange}
        />
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRematch={handleRematch} />
      )}
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
