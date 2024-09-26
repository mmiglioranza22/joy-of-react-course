import React from "react";
import Keys from "../Keys/Keys";

function KeysList({ guessedKeys }) {
  console.log({ guessedKeys });
  return (
    <div className="keys-layout">
      {guessedKeys.map((guess, i) => {
        return <Keys key={`${guess}-${i}`}>{guess}</Keys>;
      })}
    </div>
  );
}

export default KeysList;
