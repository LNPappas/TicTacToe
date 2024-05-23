import React from "react";
import Player from "../Player";
import "./Players.css";

export function Players() {
  return (
    <ol id="players">
      <Player name="Player 1" symbol="X" />
      <Player name="Player 2" symbol="O" />
    </ol>
  );
}
