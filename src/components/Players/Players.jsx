import React from "react";
import Player from "../Player";
import "./Players.css";
import { INITIAL_PLAYERS } from "../../utils";

export function Players({ activePlayer, onPlayerNameChange }) {
  const highlightPlayer = activePlayer ? "highlight-player" : undefined;
  return (
    <ol id="players" className={highlightPlayer}>
      {Object.keys(INITIAL_PLAYERS).map((key) => (
        <Player
          key={key}
          initialName={INITIAL_PLAYERS[key]}
          symbol={key}
          isActive={activePlayer === key}
          onPlayerNameChange={onPlayerNameChange}
        />
      ))}
    </ol>
  );
}
