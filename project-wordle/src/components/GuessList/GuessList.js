import React from "react";
import Guess from "../Guess/Guess";

function GuessList({ guessList, setGuessList }) {
  return (
    <div className="guess-results">
      {guessList?.length > 0 &&
        guessList.map((guess, i) => (
          <Guess key={`${guess}-${i}`} class="guess">
            {guess}
          </Guess>
        ))}
    </div>
  );
}

export default GuessList;
