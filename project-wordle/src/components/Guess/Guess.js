import React, { useState } from "react";

function Guess({ children }) {
  return (
    <p class="guess">
      {Array.from(children).map((letter, i) => (
        <span key={`${letter}-${i}`} class="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
