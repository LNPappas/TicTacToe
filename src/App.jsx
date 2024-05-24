import React, { act, useState } from "react";
import Players from "./components/Players";
import "./App.css";
import { GameBoard } from "./components/GameBoard/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    console.log(activePlayer);
    setActivePlayer((activePlayer) => {
      return activePlayer === "X" ? "O" : "X";
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} />
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
