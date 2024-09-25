import React from "react";

function Banner({ isWinner, answer, usedGuesses }) {
  return isWinner ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {usedGuesses} {usedGuesses === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
