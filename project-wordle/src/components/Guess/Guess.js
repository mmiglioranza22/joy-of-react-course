import React, { useState } from "react";

function Guess({ children, status }) {
  return (
    <p className="guess">
      {Array.from(children).map(({ letter, status }, i) => (
        <span key={`${letter}-${i}`} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
