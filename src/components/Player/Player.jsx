import React, { useState } from "react";
import "./Player.css";

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name}></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
