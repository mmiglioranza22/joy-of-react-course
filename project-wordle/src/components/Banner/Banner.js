import React from "react";
// This could be a generalized banner component for other uses (not the case for the exercise, but still in the lines of
// reusable components and composition in React)
function Banner({ isWinner, answer, usedGuesses, resetGame }) {
  return isWinner ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {usedGuesses} {usedGuesses === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
      <button className="reset-button" onClick={resetGame}>
        Reset game
      </button>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="reset-button" onClick={resetGame}>
        Reset game
      </button>
    </div>
  );
}

export default Banner;
