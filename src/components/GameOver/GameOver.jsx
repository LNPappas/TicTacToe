import React from "react";
import "./GameOver.css";

export function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} Won!</p> : <p>{winner} It's a Draw!</p>}
      <button onClick={() => onRematch()}>Rematch?</button>
    </div>
  );
}
