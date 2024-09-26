import React, { useState } from "react";

import { mapGuessedKeys, range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { KEYS, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import KeysList from "../KeysList";
// Pick a random word on every pageload.
const guessAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ guessAnswer });

const emptyGuessPlaceholder = { letter: " ", status: "" };

const emptyGuesses = range(NUM_OF_GUESSES_ALLOWED).fill(
  range(5).fill(emptyGuessPlaceholder)
); // it could be 5 empty spaces but this is more visible

const emptyStrokes = KEYS.split("").map((key) => ({ letter: key, status: "" }));
function Game() {
  const [gameAnswer, setGameAnswer] = useState(guessAnswer);
  const [guessList, setGuessList] = useState(emptyGuesses);
  const [isWinner, setIsWinner] = useState(false);
  const [allowedGuesses, setAllowedGuesses] = useState(NUM_OF_GUESSES_ALLOWED);
  const [guessedKeys, setGuessedKeys] = useState(emptyStrokes);

  const handleGuess = (guess) => {
    if (allowedGuesses >= 0) {
      const checkedGuess = checkGuess(guess, guessAnswer);
      const checkedKeys = mapGuessedKeys(checkedGuess, emptyStrokes);
      setGuessedKeys(checkedKeys);

      if (checkedGuess.every((guess) => guess.status === "correct")) {
        setIsWinner(true);
      }
      const newGuessesList = [...guessList];
      // Insert the new guess in increasing indexes, while poping the last empty placeholder so total guesses stay the same
      newGuessesList.splice(
        NUM_OF_GUESSES_ALLOWED - allowedGuesses,
        0,
        checkedGuess
      );
      newGuessesList.pop();
      setGuessList(newGuessesList);
      setAllowedGuesses(allowedGuesses - 1);
    } else {
      window.alert("No more guesses for you");
    }
  };

  const handleReset = () => {
    setGameAnswer(sample(WORDS));
    setIsWinner(false);
    setGuessList(emptyGuesses);
    setAllowedGuesses(NUM_OF_GUESSES_ALLOWED);
    setGuessedKeys(emptyStrokes);
  };

  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput
        handleGuess={handleGuess}
        noMoreGuesses={isWinner || allowedGuesses === 0}
      />
      <KeysList guessedKeys={guessedKeys} />

      {(isWinner || allowedGuesses === 0) && (
        <Banner
          isWinner={isWinner}
          answer={guessAnswer}
          usedGuesses={NUM_OF_GUESSES_ALLOWED - allowedGuesses}
          resetGame={handleReset}
        />
      )}
    </>
  );
}

export default Game;
