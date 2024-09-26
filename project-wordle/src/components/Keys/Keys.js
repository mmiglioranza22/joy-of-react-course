import React from "react";

function Keys({ children }) {
  console.log({ children });
  return (
    <p className="guess">
      <span key={`${children.letter}`} className={`letter ${children.status}`}>
        {children.letter}
      </span>

      {/* {Array.from(children).map(({ letter, status }, i) => (
        <span key={`${letter}-${i}`} className={`cell ${status}`}>
          {letter}
        </span>
      ))} */}
    </p>
  );
}

export default Keys;
