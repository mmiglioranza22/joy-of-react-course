import React from "react";

function Keys({ children }) {
  console.log({ children });
  return (
    <p className="key">
      <span key={`${children.letter}`} className={`letter ${children.status}`}>
        {children.letter}
      </span>
    </p>
  );
}

export default Keys;
