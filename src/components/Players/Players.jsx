import React from "react";
import Player from "../Player";
import "./Players.css";

const initialPlayers = {
  player1: {
    name: "Player 1",
    symbol: "X",
  },
  player2: {
    name: "Player 2",
    symbol: "O",
  },
};

export function Players({ activePlayer }) {
  const highlightPlayer = activePlayer ? "highlight-player" : undefined;
  return (
    <ol id="players" className={highlightPlayer}>
      <Player
        initialName={initialPlayers.player1.name}
        symbol={initialPlayers.player1.symbol}
        isActive={activePlayer === initialPlayers.player1.symbol}
      />
      <Player
        initialName={initialPlayers.player2.name}
        symbol={initialPlayers.player2.symbol}
        isActive={activePlayer === initialPlayers.player2.symbol}
      />
    </ol>
  );
}
