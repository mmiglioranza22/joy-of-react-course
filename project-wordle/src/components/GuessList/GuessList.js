import React from "react";
import Guess from "../Guess/Guess";

function GuessList({ guessList, guessAnswer }) {
  console.log({ guessAnswer, guessList });
  return (
    <div className="guess-results">
      {guessList?.length > 0 &&
        guessList.map((guess, i) => {
          return <Guess key={`${guess}-${i}`}>{guess}</Guess>;
        })}
    </div>
  );
}

export default GuessList;
