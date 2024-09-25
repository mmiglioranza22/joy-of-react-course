import React, { useState } from "react";

function GuessInput({ handleGuess, noMoreGuesses }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleGuess(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required={true}
        minLength={5}
        maxLength={5}
        pattern=".{5,5}" // https://stackoverflow.com/questions/10281962/is-there-a-minlength-validation-attribute-in-html
        onChange={(ev) => setGuess(ev.target.value.toUpperCase())}
        disabled={noMoreGuesses}
      />
    </form>
  );
}

export default GuessInput;
