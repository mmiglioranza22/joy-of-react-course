"use client";
import React from "react";

// Distinction between Parent/Children, Owner/Ownee
// Owner/Ownee relationship: A Client component cannot render Server components (they transform them to client components)
function ButtonCensored({ children }) {
  const [isBlurred, setIsBlurred] = React.useState(true);
  return (
    <button
      className={isBlurred ? "censored" : ""}
      onClick={() => setIsBlurred((prev) => !prev)}
    >
      {children} {/* Parent/Children relationship between CC and SC is ok */}
      {/* <ServerComponent  /> // This is not allowed because ServerComponent will be owned by ButtonCensored client component (it would be imported in this file)*/}
    </button>
  );
}

export default ButtonCensored;
