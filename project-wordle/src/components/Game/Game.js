import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const guessAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ guessAnswer });

const emptyGuessPlaceholder = { letter: " ", status: "" };

const emptyGuesses = range(NUM_OF_GUESSES_ALLOWED).fill(
  range(5).fill(emptyGuessPlaceholder)
); // it could be 5 empty spaces but this is more visible

function Game() {
  const [guessList, setGuessList] = useState(emptyGuesses);

  const [allowedGuesses, setAllowedGuesses] = useState(NUM_OF_GUESSES_ALLOWED);
  // guesses should work as a queued
  const handleGuess = (guess) => {
    if (allowedGuesses >= 0) {
      const checkedGuess = checkGuess(guess, guessAnswer);

      setAllowedGuesses(allowedGuesses - 1);
    } else {
      window.alert("No more guesses for you");
    }
  };

  return (
    <>
      <GuessList guessList={guessList} guessAnswer={guessAnswer} />
      <GuessInput
        handleGuess={handleGuess}
        noMoreGuesses={allowedGuesses === 0}
      />
    </>
  );
}

export default Game;
