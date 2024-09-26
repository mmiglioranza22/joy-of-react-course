import React from "react";
import Keys from "../Keys/Keys";

function KeysList({ guessedKeys }) {
  const topRow = guessedKeys.slice(0, 10);
  const homeRow = guessedKeys.slice(10, 19);
  const bottomRow = guessedKeys.slice(19);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="keys-layout">
        {topRow.map((guess, i) => {
          return <Keys key={`${guess}-${i}`}>{guess}</Keys>;
        })}
      </div>
      <div className="keys-layout">
        {homeRow.map((guess, i) => {
          return <Keys key={`${guess}-${i}`}>{guess}</Keys>;
        })}
      </div>
      <div className="keys-layout">
        {bottomRow.map((guess, i) => {
          return <Keys key={`${guess}-${i}`}>{guess}</Keys>;
        })}
      </div>
    </div>
  );
}

export default KeysList;
