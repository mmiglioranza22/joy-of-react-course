"use client";
import React from "react";

function CodeToggle({ children }) {
  const [toggle, setToggle] = React.useState(false);
  return !toggle ? (
    <div className="reveal">
      <button onClick={() => setToggle(true)}>Reveal Content</button>
    </div>
  ) : (
    children
  );
}

export default CodeToggle;
