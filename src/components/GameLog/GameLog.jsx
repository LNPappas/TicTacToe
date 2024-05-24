import React from "react";
import "./GameLog.css";

export function GameLog({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}-${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
